var Excel = require('exceljs');
var async = require('async');
var geocoderProvider = 'google';
var httpAdapter = 'https';
var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);
var fs = require('fs');


// read from a file
var workbook = new Excel.Workbook();
var artists = [];

function parseExcelFile(_waterfallCallback){
  workbook.xlsx.readFile('sonya_members.xlsx')
      .then(function() {
          workbook = workbook.xlsx.workbook
          workbook.eachSheet(function(worksheet, sheetId) {
            worksheet.eachRow(function(row, rowNumber) {
                if(rowNumber === 1){
                  return true;
                }
                artists.push({firstName: row.values[1], lastName: row.values[2], address: decodeURI(row.values[6]), longitude: null, latitude: null, artFormat: row.values[3], crossStreet: row.values[7]});
              });
          });
          _waterfallCallback(null, artists);
      });
}

function mapGeocodes(artistsArray, _waterfallCallback){
  async.map(artistsArray, function(artist, callback){
    geocoder.geocode(artist.address, function(err, res){
      if(err){
        console.log(artist.address);
        console.log(err);
        return(callback(err));
      }
      if(res.length === 0 || res === undefined){
        console.log(artist);
        return(callback(null, artist));
      }
      artist.latitude = res[0].latitude;
      artist.longitude = res[0].longitude;
      return(callback(null, artist));
    });
  }, function(err, results){
    if(err){
      console.log("ERROR!!");
      _waterfallCallback(err)
    }
    _waterfallCallback(null, results);
  });
}

async.waterfall([parseExcelFile, mapGeocodes], function(err, results){
  if(err){
    console.log("OH FUCK THERE WAS A FUCKING ERROR");
  }
  fs.writeFile('./artists.json', JSON.stringify(results, null, 2) , 'utf-8');
})
