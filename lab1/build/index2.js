var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.getInputs();
        this.watchInputValues();
    };
    StatsApp.prototype.getInputs = function () {
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
        this.data1Input.addEventListener('input', function () { return _this.computeData(); });
        this.data2Input.addEventListener('input', function () { return _this.computeData(); });
        this.data3Input.addEventListener('input', function () { return _this.computeData(); });
        this.data4Input.addEventListener('input', function () { return _this.computeData(); });
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
        console.log("działa");
    };
    StatsApp.prototype.showStats = function (sum, avg, min, max) {
        this.dataSumaInput.value = sum.toString();
        this.dataAvgInput.value = avg.toString();
        this.dataMinInput.value = min.toString();
        this.dataMaxInput.value = max.toString();
    };
    return StatsApp;
}());
