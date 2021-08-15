/*
4. *Самостоятельно разобраться с атрибутами тега script (async и defer)
 */

/*
По умолчанию браузер последовательно сначала выполнит скрипт, а потом
загрузит отсальную часть страницы. Если же нам надо, чтобы браузер не
останавливал обработку страницы, а дальше её загружал и параллельно выполнял
скрипт, то мы применяем атрибут async, в случае применения которого браузер
не останавливает обработку страницы, а идёт дальше, загружая
страницу и параллельно выполняя скрипт - это "асинхронная" загрузка.

Атрибут же defer указывает браузеру, что скрипт должен быть выполнен после
того, как html-документ будет полностью разобран. Такую загрузку называют
"отложенной"

Отличие отложенной загрузки от асинхронной в том, что файл, как и при
асинхронно загрузке, может быть загружен, в то время как html-элемент
парсится, однако даже если файл скрипта будет полностью загружен ещё до того,
как парсер закончит работу, то он не будет выполнен пока парсер не отработает
страницу до конца.
 */