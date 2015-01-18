// This is autogenerated by Framer Studio


// Generated by CoffeeScript 1.8.0
(function() {
  var lookupLine, properties, _RESULT,
    __slice = [].slice;

  if (window.FramerStudio == null) {
    window.FramerStudio = {};
  }

  window.onerror = null;

  window.midiCommand = window.midiCommand || function() {};

  if (Framer.Device) {
    properties = ["deviceScale", "contentScale", "deviceType", "keyboard", "orientation", "fullScreen"];
    properties.map(function(propertyName) {
      return Framer.Device.on("change:" + propertyName, function() {
        return window._bridge("device:change");
      });
    });
  }

  _RESULT = null;

  lookupLine = function(lineNumber) {
    var char, charIndex, errorColNumber, errorLine, errorLineIndex, errorLineNumber, loc, sourceLines, _i, _len;
    sourceLines = _RESULT.js.split("\n");
    errorLineIndex = lineNumber - 1;
    errorLine = sourceLines[errorLineIndex];
    if (!errorLine) {
      return lineNumber;
    }
    errorLineNumber = 1;
    errorColNumber = 0;
    for (charIndex = _i = 0, _len = errorLine.length; _i < _len; charIndex = ++_i) {
      char = errorLine[charIndex];
      loc = _RESULT.sourceMap.sourceLocation([errorLineIndex, charIndex]);
      if (loc && loc[0] > errorLineNumber) {
        errorLineNumber = loc[0] + 1;
        errorColNumber = loc[1];
      }
    }
    console.log("lineNumber", lineNumber);
    console.log("errorLineNumber", errorLineNumber);
    return errorLineNumber;
  };

  FramerStudio.compile = function(code) {
    var e, err, errorMessage;
    console.log("FramerStudio.compile");
    window.onerror = null;
    window.onresize = null;
    try {
      _RESULT = CoffeeScript.compile(code, {
        sourceMap: true,
        filename: "generated.js"
      });
    } catch (_error) {
      e = _error;
      console.log("Compile error:", e);
      if (e instanceof SyntaxError) {
        errorMessage = e.stack;
        err = new SyntaxError(e.message);
        err.line = e.location.first_line;
        err.lineNumber = e.location.first_line;
        err.lookup = true;
        window._bridge("StudioError", {
          message: e.message,
          line: e.location.first_line,
          lineNumber: e.location.first_line,
          errorType: "compile"
        });
        throw err;
      } else {
        throw e;
      }
    }
    window.onerror = function(errorMsg, url, lineNumber) {
      var error;
      console.log.apply(console, ["Eval error:"].concat(__slice.call(arguments)));
      error = new Error(errorMsg);
      error.line = lookupLine(lineNumber);
      window._bridge("StudioError", {
        message: errorMsg,
        line: error.line,
        lineNumber: error.line,
        errorType: "eval"
      });
      throw error;
    };
    return _RESULT.js;
  };

  if (typeof window._bridge === "function") {
    window._bridge("StudioScriptLoaded");
  }

}).call(this);

window.__imported__ = window.__imported__ || {};
window.__imported__["sketch-example/layers.json.js"] = [
  {
    "maskFrame" : null,
    "id" : "917F14CD-2CC6-44CF-A01A-D4F246646537",
    "visible" : true,
    "children" : [
      {
        "maskFrame" : null,
        "id" : "EB457F8B-BAE5-43AC-9823-262BC23BD76C",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/headerActive-EB457F8B-BAE5-43AC-9823-262BC23BD76C.png",
          "frame" : {
            "y" : 0,
            "x" : 0,
            "width" : 750,
            "height" : 119
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 0,
          "x" : 0,
          "width" : 750,
          "height" : 119
        },
        "name" : "headerActive"
      },
      {
        "maskFrame" : null,
        "id" : "C828FE50-DCDE-4062-8C02-AF4206396F53",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/header-C828FE50-DCDE-4062-8C02-AF4206396F53.png",
          "frame" : {
            "y" : 0,
            "x" : 0,
            "width" : 750,
            "height" : 119
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 0,
          "x" : 0,
          "width" : 750,
          "height" : 119
        },
        "name" : "header"
      },
      {
        "maskFrame" : null,
        "id" : "1D31FDBA-0B7B-4D7F-8232-B822BF89B872",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/menu-1D31FDBA-0B7B-4D7F-8232-B822BF89B872.png",
          "frame" : {
            "y" : 107,
            "x" : 0,
            "width" : 750,
            "height" : 1227
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 107,
          "x" : 0,
          "width" : 750,
          "height" : 1227
        },
        "name" : "menu"
      },
      {
        "maskFrame" : null,
        "id" : "CCB50436-C3F8-4E6F-8C50-B9A094A749E4",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/content-CCB50436-C3F8-4E6F-8C50-B9A094A749E4.png",
          "frame" : {
            "y" : 111,
            "x" : 0,
            "width" : 750,
            "height" : 1220
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 111,
          "x" : 0,
          "width" : 750,
          "height" : 1220
        },
        "name" : "content"
      }
    ],
    "image" : {
      "path" : "images\/Artboard_1-917F14CD-2CC6-44CF-A01A-D4F246646537.png",
      "frame" : {
        "y" : 0,
        "x" : 0,
        "width" : 750,
        "height" : 1334
      }
    },
    "imageType" : "png",
    "layerFrame" : {
      "y" : 0,
      "x" : 0,
      "width" : 750,
      "height" : 1334
    },
    "name" : "Artboard_1"
  }
]
window.Framer.Defaults.DeviceView = {
  "deviceScale" : -1,
  "orientation" : 0,
  "contentScale" : 1,
  "deviceType" : "iphone-6-silver-hand"
};

window.FramerStudioInfo = {
  "deviceImagesUrl" : "file:\/\/\/Applications\/Framer%20Studio.app\/Contents\/Resources\/DeviceImages\/"
};

Framer.Device = new Framer.DeviceView();
Framer.Device.setupContext();