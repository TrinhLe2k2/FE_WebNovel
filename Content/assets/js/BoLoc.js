var btnTabFilter = document.querySelector('#Main .FilterResults .Btn-Tab-Filter');
var filter = document.querySelector('#Main .FilterResults .Filter');



btnTabFilter.addEventListener('change', function() {
    if(this.checked) {
        filter.classList.remove('d-none');
        filter.classList.add('CustomCssFilter');
        filter.classList.add('col-9');
    }else {
        filter.classList.add('d-none');
        filter.classList.remove('CustomCssFilter');
    }
});