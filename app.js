function previewFile()
{
    const preview = document.querySelectorAll('.preview');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function ()
    {
        preview.forEach(_value => {
            _value.src = reader.result;
        });
    }, false);

    if (file)
    {
        reader.readAsDataURL(file);
    }
}