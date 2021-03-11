var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.dataArray = [];
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.getInputs();
        this.number = document.querySelector('#input0');
        this.container = document.getElementById("container");
        this.watchInputValues();
    };
    StatsApp.prototype.addInput = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        while ((_a = this.container) === null || _a === void 0 ? void 0 : _a.hasChildNodes()) {
            (_b = this.container) === null || _b === void 0 ? void 0 : _b.removeChild((_c = this.container) === null || _c === void 0 ? void 0 : _c.lastChild);
            this.dataArray = [];
            var tmp_1 = "0";
            this.dataSumaInput.value = tmp_1;
            this.dataAvgInput.value = tmp_1;
            this.dataMaxInput.value = tmp_1;
            this.dataMinInput.value = tmp_1;
        }
        var tmp = +this.number.value;
        var _loop_1 = function (i) {
            var p = document.createElement("label");
            p.textContent = "Wartość: ";
            p.id = "label" + (i + 1);
            (_d = this_1.container) === null || _d === void 0 ? void 0 : _d.appendChild(p);
            input = document.createElement("input");
            input.type = "text";
            input.id = "input" + (i + 1);
            (_e = this_1.container) === null || _e === void 0 ? void 0 : _e.appendChild(input);
            button = document.createElement("button");
            button.textContent = "DELETE";
            button.id = (i + 1).toString();
            button.addEventListener('click', function (event) {
                var d = "input" + (i + 1);
                var l = "label" + (i + 1);
                var b = (i + 1).toString();
                var dd = document.getElementById(d);
                var ll = document.getElementById(l);
                var bb = document.getElementById(b);
                var ddd = document.getElementById("container");
                ddd.removeChild(dd);
                ddd.removeChild(ll);
                ddd.removeChild(bb);
            });
            (_f = this_1.container) === null || _f === void 0 ? void 0 : _f.appendChild(button);
            (_g = this_1.container) === null || _g === void 0 ? void 0 : _g.appendChild(document.createElement("br"));
        };
        var this_1 = this, input, button;
        for (var i = 0; i < tmp; i++) {
            _loop_1(i);
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
            sum += dataArray2[i];
        }
        var avg = sum / +this.number.value;
        var max = Math.max.apply(Math, dataArray2);
        var min = Math.min.apply(Math, dataArray2);
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
