var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.getInputs();
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
            // this.container?.appendChild(document.createElement("br"));
        }
    };
    StatsApp.prototype.getInputs = function () {
        this.number = document.querySelector('#input0');
        this.container = document.getElementById("container");
        this.data1Input = document.querySelector('#input1');
        this.data2Input = document.querySelector('#input2');
        this.data3Input = document.querySelector('#input3');
        this.data4Input = document.querySelector('#input4');
        this.dataSumaInput = document.querySelector('#inputSum');
        this.dataAvgInput = document.querySelector('#inputAvg');
        this.dataMinInput = document.querySelector('#inputMin');
        this.dataMaxInput = document.querySelector('#inputMax');
    };
    StatsApp.prototype.watchInputValues = function () {
        var _this = this;
        var _a, _b, _c, _d;
        (_a = this.data1Input) === null || _a === void 0 ? void 0 : _a.addEventListener('input', function () { return _this.computeData(); });
        (_b = this.data2Input) === null || _b === void 0 ? void 0 : _b.addEventListener('input', function () { return _this.computeData(); });
        (_c = this.data3Input) === null || _c === void 0 ? void 0 : _c.addEventListener('input', function () { return _this.computeData(); });
        (_d = this.data4Input) === null || _d === void 0 ? void 0 : _d.addEventListener('input', function () { return _this.computeData(); });
        this.number.addEventListener('input', function () { return _this.addInput(); });
    };
    StatsApp.prototype.computeData = function () {
        var data1 = +this.data1Input.value;
        var data2 = +this.data2Input.value;
        var data3 = +this.data3Input.value;
        var data4 = +this.data4Input.value;
        var sum = data1 + data2 + data3 + data4;
        var avg = sum / 4;
        var min = Math.min(data1, data2, data3, data4);
        var max = Math.max(data1, data2, data3, data4);
        this.showStats(sum, avg, min, max);
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
