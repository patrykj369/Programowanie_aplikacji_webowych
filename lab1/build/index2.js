var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.dataArray = [];
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.number = document.querySelector('#input0');
        this.container = document.getElementById("container");
        this.watchInputValues();
    };
    StatsApp.prototype.addInput = function () {
        var _a, _b, _c, _d, _e, _f;
        while ((_a = this.container) === null || _a === void 0 ? void 0 : _a.hasChildNodes()) {
            (_b = this.container) === null || _b === void 0 ? void 0 : _b.removeChild((_c = this.container) === null || _c === void 0 ? void 0 : _c.lastChild);
        }
        var tmp = +this.number.value;
        for (var i = 0; i < tmp; i++) {
            var p = document.createTextNode("Wartość: ");
            (_d = this.container) === null || _d === void 0 ? void 0 : _d.appendChild(p);
            var input = document.createElement("input");
            input.type = "text";
            input.id = "input" + (i + 1);
            (_e = this.container) === null || _e === void 0 ? void 0 : _e.appendChild(input);
            (_f = this.container) === null || _f === void 0 ? void 0 : _f.appendChild(document.createElement("br"));
        }
        this.getInputs();
        this.watchInputValues();
    };
    StatsApp.prototype.getInputs = function () {
        this.number = document.querySelector('#input0');
        this.container = document.getElementById("container");
        if (this.container.hasChildNodes()) {
            for (var i = 0; i < +this.number.value; i++) {
                var tmp = "#input" + (i + 1);
                this.dataArray.push(document.querySelector(tmp));
            }
        }
        this.dataSumaInput = document.querySelector('#inputSum');
        this.dataAvgInput = document.querySelector('#inputAvg');
        this.dataMinInput = document.querySelector('#inputMin');
        this.dataMaxInput = document.querySelector('#inputMax');
    };
    StatsApp.prototype.watchInputValues = function () {
        var _this = this;
        var _a;
        this.number.addEventListener('input', function () { return _this.addInput(); });
        if (this.container.hasChildNodes()) {
            for (var i = 0; i < +this.number.value; i++) {
                (_a = this.dataArray[i]) === null || _a === void 0 ? void 0 : _a.addEventListener('input', function () { return _this.computeData(); });
            }
        }
    };
    StatsApp.prototype.computeData = function () {
        var dataArray2 = [];
        var sum = 0;
        for (var i = 0; i < +this.number.value; i++) {
            dataArray2[i] = +this.dataArray[i].value;
            sum = +dataArray2[i];
            var avg = sum / +this.number.value;
            var min = Math.min.apply(Math, dataArray2);
            var max = Math.max.apply(Math, dataArray2);
            this.showStats(sum, avg, min, max);
        }
    };
    StatsApp.prototype.showStats = function (sum, avg, min, max) {
        this.dataSumaInput.value = sum.toString();
        this.dataAvgInput.value = avg.toString();
        this.dataMinInput.value = min.toString();
        this.dataMaxInput.value = max.toString();
    };
    return StatsApp;
}());
var statApp = new StatsApp();
