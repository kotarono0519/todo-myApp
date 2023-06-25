$('#addTodo').click(function () {
    const inputTodo = $('input').val();
    console.log(inputTodo)
    $('#todoList').append('<li><input type="checkbox">' + inputTodo + '</li>');

    $('input').val('');
});