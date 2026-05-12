const data = [
    {
        name: "INF.03",
        fullName: "Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych",
        questions: [
            {
                id: 0,
                title: "Który z atrybutów znacznika <img> w HTML odpowiada za tekst alternatywny?",
                answers: [{ id: 0, text: "title" }, { id: 1, text: "alt" }, { id: 2, text: "src" }, { id: 3, text: "longdesc" }],
                goodAnswer: 1
            },
            {
                id: 1,
                title: "W języku PHP, aby połączyć się z bazą danych MySQL, należy użyć funkcji:",
                answers: [{ id: 0, text: "mysqli_connect()" }, { id: 1, text: "mysql_open()" }, { id: 2, text: "db_connect()" }, { id: 3, text: "connect_mysql()" }],
                goodAnswer: 0
            },
            {
                id: 2,
                title: "Która właściwość CSS służy do zmiany koloru tła elementu?",
                answers: [{ id: 0, text: "color" }, { id: 1, text: "bgcolor" }, { id: 2, text: "background-color" }, { id: 3, text: "back-color" }],
                goodAnswer: 2
            },
            {
                id: 3,
                title: "W języku SQL polecenie służące do usuwania danych z tabeli to:",
                answers: [{ id: 0, text: "REMOVE" }, { id: 1, text: "DROP" }, { id: 2, text: "DELETE" }, { id: 3, text: "TRUNCATE" }],
                goodAnswer: 2
            },
            {
                id: 4,
                title: "Który symbol w języku JavaScript oznacza operator logiczny 'I' (AND)?",
                answers: [{ id: 0, text: "||" }, { id: 1, text: "&&" }, { id: 2, text: "!" }, { id: 3, text: "&" }],
                goodAnswer: 1
            },
            {
                id: 5,
                title: "Jaki jest domyślny port dla protokołu HTTP?",
                answers: [{ id: 0, text: "21" }, { id: 1, text: "443" }, { id: 2, text: "80" }, { id: 3, text: "110" }],
                goodAnswer: 2
            },
            {
                id: 6,
                title: "Który znacznik HTML służy do utworzenia listy numerowanej?",
                answers: [{ id: 0, text: "<ul>" }, { id: 1, text: "<li>" }, { id: 2, text: "<ol>" }, { id: 3, text: "<list>" }],
                goodAnswer: 2
            },
            {
                id: 7,
                title: "Jakie rozszerzenie ma plik kaskadowych arkuszy stylów?",
                answers: [{ id: 0, text: ".css" }, { id: 1, text: ".cas" }, { id: 2, text: ".style" }, { id: 3, text: ".html" }],
                goodAnswer: 0
            },
            {
                id: 8,
                title: "W SQL klauzula ORDER BY służy do:",
                answers: [{ id: 0, text: "Grupowania wyników" }, { id: 1, text: "Sortowania wyników" }, { id: 2, text: "Łączenia tabel" }, { id: 3, text: "Filtrowania wyników" }],
                goodAnswer: 1
            },
            {
                id: 9,
                title: "Która z metod obiektu XMLHttpRequest wysyła żądanie do serwera?",
                answers: [{ id: 0, text: "open()" }, { id: 1, text: "get()" }, { id: 2, text: "send()" }, { id: 3, text: "post()" }],
                goodAnswer: 2
            },
            {
                id: 10,
                title: "W CSS, aby tekst był pogrubiony, należy użyć właściwości font-weight z wartością:",
                answers: [{ id: 0, text: "italic" }, { id: 1, text: "bold" }, { id: 2, text: "underline" }, { id: 3, text: "heavy" }],
                goodAnswer: 1
            },
            {
                id: 11,
                title: "Zmienne w języku PHP zaczynają się od znaku:",
                answers: [{ id: 0, text: "#" }, { id: 1, text: "&" }, { id: 2, text: "$" }, { id: 3, text: "@" }],
                goodAnswer: 2
            },
            {
                id: 12,
                title: "Który z formatów plików graficznych obsługuje przezroczystość?",
                answers: [{ id: 0, text: "JPG" }, { id: 1, text: "BMP" }, { id: 2, text: "PNG" }, { id: 3, text: "TIFF" }],
                goodAnswer: 2
            },
            {
                id: 13,
                title: "W SQL funkcja agregująca COUNT() służy do:",
                answers: [{ id: 0, text: "Sumowania wartości" }, { id: 1, text: "Zliczania liczby wierszy" }, { id: 2, text: "Obliczania średniej" }, { id: 3, text: "Znajdowania wartości maksymalnej" }],
                goodAnswer: 1
            },
            {
                id: 14,
                title: "Jak w JavaScript zdefiniować funkcję o nazwie 'mojaFunkcja'?",
                answers: [{ id: 0, text: "function:mojaFunkcja()" }, { id: 1, text: "function mojaFunkcja()" }, { id: 2, text: "new function mojaFunkcja()" }, { id: 3, text: "def mojaFunkcja()" }],
                goodAnswer: 1
            },
            {
                id: 15,
                title: "Który model barw oparty jest na zjawisku mieszania światła (synteza addytywna)?",
                answers: [{ id: 0, text: "CMYK" }, { id: 1, text: "RGB" }, { id: 2, text: "HSL" }, { id: 3, text: "HSV" }],
                goodAnswer: 1
            },
            {
                id: 16,
                title: "Który znacznik HTML jest używany do osadzania kodu JavaScript bezpośrednio w dokumencie?",
                answers: [{ id: 0, text: "<javascript>" }, { id: 1, text: "<scripting>" }, { id: 2, text: "<script>" }, { id: 3, text: "<js>" }],
                goodAnswer: 2
            },
            {
                id: 17,
                title: "W CSS selektor '#identyfikator' odnosi się do elementu o określonym:",
                answers: [{ id: 0, text: "Atrybucie class" }, { id: 1, text: "Znaczniku" }, { id: 2, text: "Atrybucie id" }, { id: 3, text: "Atrybucie name" }],
                goodAnswer: 2
            },
            {
                id: 18,
                title: "Który typ danych w SQL służy do przechowywania krótkich ciągów znaków o zmiennej długości?",
                answers: [{ id: 0, text: "INT" }, { id: 1, text: "VARCHAR" }, { id: 2, text: "TEXT" }, { id: 3, text: "CHAR" }],
                goodAnswer: 1
            },
            {
                id: 19,
                title: "Jaki wynik da działanie PHP: echo 5 % 2;?",
                answers: [{ id: 0, text: "2.5" }, { id: 1, text: "2" }, { id: 2, text: "1" }, { id: 3, text: "0" }],
                goodAnswer: 2
            },
            {
                id: 20,
                title: "W dokumencie HTML5 znacznik <header> reprezentuje:",
                answers: [{ id: 0, text: "Nagłówek najwyższego stopnia (h1)" }, { id: 1, text: "Sekcję wprowadzającą lub zestaw linków nawigacyjnych" }, { id: 2, text: "Główną treść strony" }, { id: 3, text: "Stopkę strony" }],
                goodAnswer: 1
            },
            {
                id: 21,
                title: "Która jednostka CSS jest relatywna względem rozmiaru czcionki elementu nadrzędnego?",
                answers: [{ id: 0, text: "px" }, { id: 1, text: "cm" }, { id: 2, text: "em" }, { id: 3, text: "pt" }],
                goodAnswer: 2
            },
            {
                id: 22,
                title: "W języku SQL polecenie UPDATE służy do:",
                answers: [{ id: 0, text: "Tworzenia nowej tabeli" }, { id: 1, text: "Modyfikowania istniejących danych" }, { id: 2, text: "Wstawiania nowych wierszy" }, { id: 3, text: "Usuwania bazy danych" }],
                goodAnswer: 1
            },
            {
                id: 23,
                title: "Jakie zdarzenie w JavaScript zostanie wywołane po kliknięciu myszką na element?",
                answers: [{ id: 0, text: "onmouseover" }, { id: 1, text: "onchange" }, { id: 2, text: "onclick" }, { id: 3, text: "onsubmit" }],
                goodAnswer: 2
            },
            {
                id: 24,
                title: "Który z poniższych protokołów służy do bezpiecznego przesyłania plików?",
                answers: [{ id: 0, text: "FTP" }, { id: 1, text: "SFTP" }, { id: 2, text: "HTTP" }, { id: 3, text: "SMTP" }],
                goodAnswer: 1
            },
            {
                id: 25,
                title: "Atrybut 'action' w znaczniku <form> określa:",
                answers: [{ id: 0, text: "Metodę przesyłania danych" }, { id: 1, text: "Adres URL, gdzie mają zostać wysłane dane" }, { id: 2, text: "Sposób kodowania znaków" }, { id: 3, text: "Nazwę formularza" }],
                goodAnswer: 1
            },
            {
                id: 26,
                title: "W CSS właściwość 'float' może przyjąć wartość:",
                answers: [{ id: 0, text: "middle" }, { id: 1, text: "center" }, { id: 2, text: "left" }, { id: 3, text: "top" }],
                goodAnswer: 2
            },
            {
                id: 27,
                title: "Jak nazywa się klucz w bazie danych, który jednoznacznie identyfikuje rekord?",
                answers: [{ id: 0, text: "Klucz obcy" }, { id: 1, text: "Klucz główny (podstawowy)" }, { id: 2, text: "Klucz unikalny" }, { id: 3, text: "Klucz zewnętrzny" }],
                goodAnswer: 1
            },
            {
                id: 28,
                title: "W PHP funkcja include() służy do:",
                answers: [{ id: 0, text: "Definiowania klas" }, { id: 1, text: "Dołączania zawartości innego pliku" }, { id: 2, text: "Łączenia się z serwerem FTP" }, { id: 3, text: "Wyświetlania błędów" }],
                goodAnswer: 1
            },
            {
                id: 29,
                title: "W JavaScript instrukcja 'typeof' służy do:",
                answers: [{ id: 0, text: "Konwersji typu danych" }, { id: 1, text: "Sprawdzenia typu danych zmiennej" }, { id: 2, text: "Tworzenia nowej zmiennej" }, { id: 3, text: "Porównania dwóch wartości" }],
                goodAnswer: 1
            },
            {
                id: 30,
                title: "Znacznik <title> w dokumencie HTML powinien znajdować się wewnątrz sekcji:",
                answers: [{ id: 0, text: "<body>" }, { id: 1, text: "<footer>" }, { id: 2, text: "<head>" }, { id: 3, text: "<nav>" }],
                goodAnswer: 2
            },
            {
                id: 31,
                title: "W CSS właściwość 'margin: 10px 20px;' ustawi marginesy:",
                answers: [{ id: 0, text: "Wszystkie na 10px" }, { id: 1, text: "Góra/dół 10px, lewy/prawy 20px" }, { id: 2, text: "Góra/dół 20px, lewy/prawy 10px" }, { id: 3, text: "Tylko górny 10px i dolny 20px" }],
                goodAnswer: 1
            },
            {
                id: 32,
                title: "Relacja, w której jeden rekord tabeli A odpowiada wielu rekordom tabeli B, to:",
                answers: [{ id: 0, text: "1:1" }, { id: 1, text: "1:N" }, { id: 2, text: "N:M" }, { id: 3, text: "N:1" }],
                goodAnswer: 1
            },
            {
                id: 33,
                title: "Który z operatorów PHP służy do konkatenacji (łączenia) ciągów znaków?",
                answers: [{ id: 0, text: "+" }, { id: 1, text: "&" }, { id: 2, text: "." }, { id: 3, text: "&&" }],
                goodAnswer: 2
            },
            {
                id: 34,
                title: "W JavaScript metodą służącą do wypisania tekstu w oknie dialogowym jest:",
                answers: [{ id: 0, text: "console.log()" }, { id: 1, text: "document.write()" }, { id: 2, text: "alert()" }, { id: 3, text: "print()" }],
                goodAnswer: 2
            },
            {
                id: 35,
                title: "Który standard definiuje zasady dostępności treści internetowych dla osób z niepełnosprawnościami?",
                answers: [{ id: 0, text: "W3C" }, { id: 1, text: "WCAG" }, { id: 2, text: "ISO" }, { id: 3, text: "WIFI" }],
                goodAnswer: 1
            },
            {
                id: 36,
                title: "W HTML znacznik <a> z atrybutem 'href' służy do tworzenia:",
                answers: [{ id: 0, text: "Akapitów" }, { id: 1, text: "Hiperłączy" }, { id: 2, text: "Artykułów" }, { id: 3, text: "Tabel" }],
                goodAnswer: 1
            },
            {
                id: 37,
                title: "W CSS właściwość 'display: none;' powoduje:",
                answers: [{ id: 0, text: "Ustawienie elementu jako przezroczystego" }, { id: 1, text: "Ukrycie elementu i usunięcie go z układu strony" }, { id: 2, text: "Zmniejszenie elementu do minimum" }, { id: 3, text: "Zablokowanie edycji elementu" }],
                goodAnswer: 1
            },
            {
                id: 38,
                title: "W języku SQL, aby usunąć całą tabelę wraz ze strukturą, należy użyć:",
                answers: [{ id: 0, text: "DELETE TABLE" }, { id: 1, text: "DROP TABLE" }, { id: 2, text: "REMOVE TABLE" }, { id: 3, text: "ERASE TABLE" }],
                goodAnswer: 1
            },
            {
                id: 39,
                title: "Która pętla w PHP wykona się przynajmniej raz, nawet jeśli warunek jest fałszywy?",
                answers: [{ id: 0, text: "for" }, { id: 1, text: "while" }, { id: 2, text: "do...while" }, { id: 3, text: "foreach" }],
                goodAnswer: 2
            },
            {
                id: 40,
                title: "Metoda DOM 'getElementById()' służy do:",
                answers: [{ id: 0, text: "Pobrania wszystkich elementów danej klasy" }, { id: 1, text: "Pobrania pierwszego elementu o danym ID" }, { id: 2, text: "Zmiany identyfikatora elementu" }, { id: 3, text: "Usunięcia elementu o danym ID" }],
                goodAnswer: 1
            },
            {
                id: 41,
                title: "Format grafiki wektorowej, który można edytować w pliku tekstowym, to:",
                answers: [{ id: 0, text: "GIF" }, { id: 1, text: "SVG" }, { id: 2, text: "JPG" }, { id: 3, text: "EPS" }],
                goodAnswer: 1
            },
            {
                id: 42,
                title: "W HTML znacznik <table> zawiera wiersze definiowane przez:",
                answers: [{ id: 0, text: "<td>" }, { id: 1, text: "<th>" }, { id: 2, text: "<tr>" }, { id: 3, text: "<tf>" }],
                goodAnswer: 2
            },
            {
                id: 43,
                title: "W CSS właściwość 'z-index' określa:",
                answers: [{ id: 0, text: "Szerokość elementu" }, { id: 1, text: "Kolejność nakładania się elementów" }, { id: 2, text: "Stopień przezroczystości" }, { id: 3, text: "Przybliżenie widoku" }],
                goodAnswer: 1
            },
            {
                id: 44,
                title: "W SQL operator 'LIKE' służy do:",
                answers: [{ id: 0, text: "Porównywania liczb" }, { id: 1, text: "Wyszukiwania według wzorca znaków" }, { id: 2, text: "Łączenia dwóch zapytań" }, { id: 3, text: "Sortowania danych" }],
                goodAnswer: 1
            },
            {
                id: 45,
                title: "W PHP tablica asocjacyjna to taka, w której klucze:",
                answers: [{ id: 0, text: "Są zawsze liczbami całkowitymi" }, { id: 1, text: "Są nazwami (stringami)" }, { id: 2, text: "Są automatycznie inkrementowane" }, { id: 3, text: "Nie istnieją" }],
                goodAnswer: 1
            },
            {
                id: 46,
                title: "Która funkcja JavaScript służy do przekształcenia tekstu na liczbę całkowitą?",
                answers: [{ id: 0, text: "toString()" }, { id: 1, text: "Math.round()" }, { id: 2, text: "parseInt()" }, { id: 3, text: "toNumber()" }],
                goodAnswer: 2
            },
            {
                id: 47,
                title: "Walidacja strony WWW to proces:",
                answers: [{ id: 0, text: "Sprawdzania poprawności kodu z regułami standardów (np. W3C)" }, { id: 1, text: "Wrzucania plików na serwer" }, { id: 2, text: "Tworzenia kopii zapasowej bazy danych" }, { id: 3, text: "Pozycjonowania strony w Google" }],
                goodAnswer: 0
            },
            {
                id: 48,
                title: "W CSS pseudoklasa ':hover' aktywuje się, gdy:",
                answers: [{ id: 0, text: "Element został kliknięty" }, { id: 1, text: "Kursor myszy znajduje się nad elementem" }, { id: 2, text: "Link został już odwiedzony" }, { id: 3, text: "Element zyskał fokus" }],
                goodAnswer: 1
            },
            {
                id: 49,
                title: "W SQL polecenie 'CREATE DATABASE' służy do:",
                answers: [{ id: 0, text: "Tworzenia nowej tabeli" }, { id: 1, text: "Tworzenia nowej bazy danych" }, { id: 2, text: "Dodawania użytkownika bazy" }, { id: 3, text: "Modyfikowania uprawnień" }],
                goodAnswer: 1
            },
            {
                id: 50,
                title: "W języku PHP, aby rozpocząć sesję, należy użyć funkcji:",
                answers: [{ id: 0, text: "session_begin()" }, { id: 1, text: "session_start()" }, { id: 2, text: "start_session()" }, { id: 3, text: "header('Session')" }],
                goodAnswer: 1
            },
            {
                id: 51,
                title: "Która właściwość CSS określa pozycjonowanie elementu względem okna przeglądarki?",
                answers: [{ id: 0, text: "absolute" }, { id: 1, text: "relative" }, { id: 2, text: "fixed" }, { id: 3, text: "static" }],
                goodAnswer: 2
            },
            {
                id: 52,
                title: "W języku SQL polecenie GRANT służy do:",
                answers: [{ id: 0, text: "Nadawania uprawnień" }, { id: 1, text: "Odbierania uprawnień" }, { id: 2, text: "Usuwania użytkowników" }, { id: 3, text: "Tworzenia tabel" }],
                goodAnswer: 0
            },
            {
                id: 53,
                title: "W JavaScript, aby sprawdzić długość ciągu znaków używamy:",
                answers: [{ id: 0, text: "size()" }, { id: 1, text: "count" }, { id: 2, text: "length" }, { id: 3, text: "len()" }],
                goodAnswer: 2
            },
            {
                id: 54,
                title: "Która metoda przesyłania danych w formularzu jest widoczna w pasku adresu?",
                answers: [{ id: 0, text: "POST" }, { id: 1, text: "PUT" }, { id: 2, text: "GET" }, { id: 3, text: "SEND" }],
                goodAnswer: 2
            },
            {
                id: 55,
                title: "W CSS właściwość 'box-sizing: border-box;' sprawia, że:",
                answers: [{ id: 0, text: "Marginesy są wliczane" }, { id: 1, text: "Padding i obramowanie są wliczane do szerokości" }, { id: 2, text: "Element jest ukryty" }, { id: 3, text: "Tło jest czerwone" }],
                goodAnswer: 1
            },
            {
                id: 56,
                title: "W SQL, aby złączyć tabele dopasowując rekordy w obu, używamy:",
                answers: [{ id: 0, text: "LEFT JOIN" }, { id: 1, text: "OUTER JOIN" }, { id: 2, text: "INNER JOIN" }, { id: 3, text: "CROSS JOIN" }],
                goodAnswer: 2
            },
            {
                id: 57,
                title: "Który znacznik HTML5 służy do wyświetlania artykułu?",
                answers: [{ id: 0, text: "<section>" }, { id: 1, text: "<article>" }, { id: 2, text: "<aside>" }, { id: 3, text: "<div>" }],
                goodAnswer: 1
            },
            {
                id: 58,
                title: "W PHP tablica przechowująca dane z metody POST to:",
                answers: [{ id: 0, text: "$GET_POST" }, { id: 1, text: "$_POST" }, { id: 2, text: "$_SEND" }, { id: 3, text: "$HTTP_POST" }],
                goodAnswer: 1
            },
            {
                id: 59,
                title: "W JavaScript 'break' wewnątrz pętli powoduje:",
                answers: [{ id: 0, text: "Kolejną iterację" }, { id: 1, text: "Wyjście z pętli" }, { id: 2, text: "Restart pętli" }, { id: 3, text: "Błąd skryptu" }],
                goodAnswer: 1
            },
            {
                id: 60,
                title: "Atrybut 'colspan' służy do:",
                answers: [{ id: 0, text: "Łączenia wierszy" }, { id: 1, text: "Łączenia kolumn" }, { id: 2, text: "Koloru" }, { id: 3, text: "Marginesu" }],
                goodAnswer: 1
            },
            {
                id: 61,
                title: "W CSS, aby usunąć podkreślenie linku:",
                answers: [{ id: 0, text: "text-style: none" }, { id: 1, text: "font-decoration: none" }, { id: 2, text: "text-decoration: none" }, { id: 3, text: "link-style: none" }],
                goodAnswer: 2
            },
            {
                id: 62,
                title: "W SQL 'ALTER TABLE' służy do:",
                answers: [{ id: 0, text: "Usuwania" }, { id: 1, text: "Modyfikowania struktury" }, { id: 2, text: "Wstawiania" }, { id: 3, text: "Zmiany nazwy bazy" }],
                goodAnswer: 1
            },
            {
                id: 63,
                title: "Komentarz w CSS to:",
                answers: [{ id: 0, text: "//" }, { id: 1, text: "/* */" }, { id: 2, text: "<!-- -->" }, { id: 3, text: "#" }],
                goodAnswer: 1
            },
            {
                id: 64,
                title: "W PHP funkcja 'header()' służy do:",
                answers: [{ id: 0, text: "Nagłówka H1" }, { id: 1, text: "Przekierowania" }, { id: 2, text: "Meta-tagów" }, { id: 3, text: "Pogrubienia" }],
                goodAnswer: 1
            },
            {
                id: 65,
                title: "W JS 'Math.random()' zwraca liczbę:",
                answers: [{ id: 0, text: "1-100" }, { id: 1, text: "0-1 włącznie" }, { id: 2, text: "0-1 wyłącznie" }, { id: 3, text: "całkowitą" }],
                goodAnswer: 2
            },
            {
                id: 66,
                title: "W CMYK litera 'K' to:",
                answers: [{ id: 0, text: "Niebieski" }, { id: 1, text: "Czarny" }, { id: 2, text: "Zielony" }, { id: 3, text: "Brązowy" }],
                goodAnswer: 1
            },
            {
                id: 67,
                title: "Protokół do odbierania poczty to:",
                answers: [{ id: 0, text: "SMTP" }, { id: 1, text: "POP3" }, { id: 2, text: "SNMP" }, { id: 3, text: "FTP" }],
                goodAnswer: 1
            },
            {
                id: 68,
                title: "Atrybut 'method' w <form> to:",
                answers: [{ id: 0, text: "GET/POST" }, { id: 1, text: "SEND/RECEIVE" }, { id: 2, text: "IN/OUT" }, { id: 3, text: "SET/READ" }],
                goodAnswer: 0
            },
            {
                id: 69,
                title: "W CSS 'opacity: 0.5' to:",
                answers: [{ id: 0, text: "Brak przezroczystości" }, { id: 1, text: "50% przezroczystości" }, { id: 2, text: "Ukrycie" }, { id: 3, text: "Jasność" }],
                goodAnswer: 1
            },
            {
                id: 70,
                title: "W SQL 'DISTINCT' powoduje:",
                answers: [{ id: 0, text: "Sortowanie" }, { id: 1, text: "Pominięcie duplikatów" }, { id: 2, text: "Zliczanie" }, { id: 3, text: "Filtrowanie NULL" }],
                goodAnswer: 1
            },
            {
                id: 71,
                title: "W PHP do sprawdzenia czy zmienna istnieje używamy:",
                answers: [{ id: 0, text: "is_set()" }, { id: 1, text: "empty()" }, { id: 2, text: "isset()" }, { id: 3, text: "defined()" }],
                goodAnswer: 2
            },
            {
                id: 72,
                title: "W JS 'onload' występuje, gdy:",
                answers: [{ id: 0, text: "Kliknięto" }, { id: 1, text: "Załadowano stronę" }, { id: 2, text: "Opuszczono stronę" }, { id: 3, text: "Wysłano formularz" }],
                goodAnswer: 1
            },
            {
                id: 73,
                title: "W HTML5 <canvas> to:",
                answers: [{ id: 0, text: "Wideo" }, { id: 1, text: "Grafika z JS" }, { id: 2, text: "Animacja Flash" }, { id: 3, text: "Pamięć" }],
                goodAnswer: 1
            },
            {
                id: 74,
                title: "W CSS 'p > span' to:",
                answers: [{ id: 0, text: "Wszystkie span w p" }, { id: 1, text: "Bezpośrednie dzieci span w p" }, { id: 2, text: "p ze spanami" }, { id: 3, text: "span obok p" }],
                goodAnswer: 1
            },
            {
                id: 75,
                title: "W SQL 'SUM()' to:",
                answers: [{ id: 0, text: "Ilość" }, { id: 1, text: "Suma wartości" }, { id: 2, text: "Łączenie" }, { id: 3, text: "Średnia" }],
                goodAnswer: 1
            },
            {
                id: 76,
                title: "W PHP '===' sprawdza:",
                answers: [{ id: 0, text: "Wartość" }, { id: 1, text: "Typ" }, { id: 2, text: "Wartość i typ" }, { id: 3, text: "Obiekt" }],
                goodAnswer: 2
            },
            {
                id: 77,
                title: "W JS 'confirm()' wyświetla:",
                answers: [{ id: 0, text: "Konsolę" }, { id: 1, text: "OK/Anuluj" }, { id: 2, text: "Hasło" }, { id: 3, text: "Submit" }],
                goodAnswer: 1
            },
            {
                id: 78,
                title: "Grafika rastrowa to:",
                answers: [{ id: 0, text: "Krzywe" }, { id: 1, text: "Piksele" }, { id: 2, text: "CMYK" }, { id: 3, text: "Tekst" }],
                goodAnswer: 1
            },
            {
                id: 79,
                title: "W HTML pole wymagane to:",
                answers: [{ id: 0, text: "validate" }, { id: 1, text: "needed" }, { id: 2, text: "required" }, { id: 3, text: "important" }],
                goodAnswer: 2
            },
            {
                id: 80,
                title: "W CSS 'vh' to:",
                answers: [{ id: 0, text: "Font" }, { id: 1, text: "Viewport height" }, { id: 2, text: "Border" }, { id: 3, text: "DPI" }],
                goodAnswer: 1
            },
            {
                id: 81,
                title: "W SQL 'WHERE' to:",
                answers: [{ id: 0, text: "Warunek" }, { id: 1, text: "Tabela" }, { id: 2, text: "Sortowanie" }, { id: 3, text: "Join" }],
                goodAnswer: 0
            },
            {
                id: 82,
                title: "W PHP 'mysqli_query()' to:",
                answers: [{ id: 0, text: "Connect" }, { id: 1, text: "Zapytanie SQL" }, { id: 2, text: "Close" }, { id: 3, text: "Select DB" }],
                goodAnswer: 1
            },
            {
                id: 83,
                title: "W JS 'push()' do tablicy:",
                answers: [{ id: 0, text: "Usuwa" }, { id: 1, text: "Dodaje na końcu" }, { id: 2, text: "Odwraca" }, { id: 3, text: "Sortuje" }],
                goodAnswer: 1
            },
            {
                id: 84,
                title: "target='_blank' to:",
                answers: [{ id: 0, text: "Download" }, { id: 1, text: "Nowa karta" }, { id: 2, text: "To samo okno" }, { id: 3, text: "Blokada" }],
                goodAnswer: 1
            },
            {
                id: 85,
                title: "W CSS 'italic' to:",
                answers: [{ id: 0, text: "Pogrubienie" }, { id: 1, text: "Kursywa" }, { id: 2, text: "Podkreślenie" }, { id: 3, text: "Wielkie litery" }],
                goodAnswer: 1
            },
            {
                id: 86,
                title: "W SQL 'REVOKE' to:",
                answers: [{ id: 0, text: "Grant" }, { id: 1, text: "Odebranie uprawnień" }, { id: 2, text: "Hasło" }, { id: 3, text: "Blokada" }],
                goodAnswer: 1
            },
            {
                id: 87,
                title: "W PHP 'die()' to:",
                answers: [{ id: 0, text: "Restart" }, { id: 1, text: "Zatrzymanie skryptu" }, { id: 2, text: "Cache" }, { id: 3, text: "Logout" }],
                goodAnswer: 1
            },
            {
                id: 88,
                title: "W JS zasięg blokowy to:",
                answers: [{ id: 0, text: "var" }, { id: 1, text: "let" }, { id: 2, text: "block" }, { id: 3, text: "dim" }],
                goodAnswer: 1
            },
            {
                id: 89,
                title: "charset='UTF-8' to:",
                answers: [{ id: 0, text: "Język" }, { id: 1, text: "Kodowanie" }, { id: 2, text: "Tytuł" }, { id: 3, text: "SEO" }],
                goodAnswer: 1
            },
            {
                id: 90,
                title: "list-style-type: square to:",
                answers: [{ id: 0, text: "Kółka" }, { id: 1, text: "Kwadraty" }, { id: 2, text: "Cyfry" }, { id: 3, text: "Brak" }],
                goodAnswer: 1
            },
            {
                id: 91,
                title: "W SQL dodanie rekordu to:",
                answers: [{ id: 0, text: "ADD" }, { id: 1, text: "INSERT INTO" }, { id: 2, text: "UPDATE" }, { id: 3, text: "CREATE" }],
                goodAnswer: 1
            },
            {
                id: 92,
                title: "W PHP 'count()' to:",
                answers: [{ id: 0, text: "Suma" }, { id: 1, text: "Liczba elementów" }, { id: 2, text: "Pierwszy" }, { id: 3, text: "Indeks" }],
                goodAnswer: 1
            },
            {
                id: 93,
                title: "W JS '!=' to:",
                answers: [{ id: 0, text: "Równe" }, { id: 1, text: "Różne" }, { id: 2, text: "NOT" }, { id: 3, text: "Mniejsze" }],
                goodAnswer: 1
            },
            {
                id: 94,
                title: "Bezstratny dźwięk to:",
                answers: [{ id: 0, text: "MP3" }, { id: 1, text: "FLAC" }, { id: 2, text: "WMA" }, { id: 3, text: "OGG" }],
                goodAnswer: 1
            },
            {
                id: 95,
                title: "Znacznik <hr> to:",
                answers: [{ id: 0, text: "BR" }, { id: 1, text: "Linia pozioma" }, { id: 2, text: "B" }, { id: 3, text: "H1" }],
                goodAnswer: 1
            },
            {
                id: 96,
                title: "text-align: justify to:",
                answers: [{ id: 0, text: "Center" }, { id: 1, text: "Wyjustowanie" }, { id: 2, text: "Right" }, { id: 3, text: "Caps" }],
                goodAnswer: 1
            },
            {
                id: 97,
                title: "GROUP BY używamy z:",
                answers: [{ id: 0, text: "Agregatami" }, { id: 1, text: "DELETE" }, { id: 2, text: "JOIN" }, { id: 3, text: "VIEW" }],
                goodAnswer: 0
            },
            {
                id: 98,
                title: "PHP obiektowo DB to:",
                answers: [{ id: 0, text: "MySQL" }, { id: 1, text: "PDO" }, { id: 2, text: "Connect" }, { id: 3, text: "DB" }],
                goodAnswer: 1
            },
            {
                id: 99,
                title: "W JS 'prompt()' to:",
                answers: [{ id: 0, text: "Alert" }, { id: 1, text: "Pobranie danych tekstowych" }, { id: 2, text: "Błąd" }, { id: 3, text: "Zamknięcie" }],
                goodAnswer: 1
            },
            {
                id: 100,
                title: "W programie GIMP do zaznaczania obszarów o podobnym kolorze służy:",
                answers: [{ id: 0, text: "Pędzel" }, { id: 1, text: "Różdżka" }, { id: 2, text: "Gumka" }, { id: 3, text: "Ołówek" }],
                goodAnswer: 1
            },
            {
                id: 101,
                title: "Który atrybut HTML pozwala na unikalne zidentyfikowanie elementu na stronie?",
                answers: [{ id: 0, text: "class" }, { id: 1, text: "id" }, { id: 2, text: "name" }, { id: 3, text: "type" }],
                goodAnswer: 1
            },
            {
                id: 102,
                title: "Jaki skrót klawiszowy w przeglądarce otwiera narzędzia deweloperskie?",
                answers: [{ id: 0, text: "F1" }, { id: 1, text: "F5" }, { id: 2, text: "F12" }, { id: 3, text: "Ctrl+S" }],
                goodAnswer: 2
            },
            {
                id: 103,
                title: "W CSS właściwość 'border-radius' służy do:",
                answers: [{ id: 0, text: "Zmiany koloru obramowania" }, { id: 1, text: "Zaokrąglenia rogów" }, { id: 2, text: "Grubości linii" }, { id: 3, text: "Cienia" }],
                goodAnswer: 1
            },
            {
                id: 104,
                title: "Który z poniższych jest językiem zapytań strukturalnych?",
                answers: [{ id: 0, text: "HTML" }, { id: 1, text: "CSS" }, { id: 2, text: "SQL" }, { id: 3, text: "XML" }],
                goodAnswer: 2
            },
            {
                id: 105,
                title: "W JavaScript 'NaN' oznacza:",
                answers: [{ id: 0, text: "Nowy numer" }, { id: 1, text: "Not a Number" }, { id: 2, text: "Null" }, { id: 3, text: "Negative" }],
                goodAnswer: 1
            },
            {
                id: 106,
                title: "W PHP funkcja 'rand(1, 10)' zwróci:",
                answers: [{ id: 0, text: "Liczbę od 1 do 10" }, { id: 1, text: "Zawsze 1" }, { id: 2, text: "Zawsze 10" }, { id: 3, text: "Liczbę zmiennoprzecinkową" }],
                goodAnswer: 0
            },
            {
                id: 107,
                title: "W SQL polecenie 'TRUNCATE TABLE' powoduje:",
                answers: [{ id: 0, text: "Usunięcie struktury tabeli" }, { id: 1, text: "Usunięcie wszystkich rekordów bez usuwania struktury" }, { id: 2, text: "Zmianę nazwy" }, { id: 3, text: "Kopiowanie tabeli" }],
                goodAnswer: 1
            },
            {
                id: 108,
                title: "W CSS 'flex-direction: column' ustawi elementy:",
                answers: [{ id: 0, text: "W poziomie" }, { id: 1, text: "W pionie" }, { id: 2, text: "Na ukos" }, { id: 3, text: "W losowej kolejności" }],
                goodAnswer: 1
            },
            {
                id: 109,
                title: "Skrót CMS oznacza:",
                answers: [{ id: 0, text: "Content Management System" }, { id: 1, text: "Core Media System" }, { id: 2, text: "Computer Management Software" }, { id: 3, text: "Creative Mode Style" }],
                goodAnswer: 0
            },
            {
                id: 110,
                title: "W HTML znacznik <br> służy do:",
                answers: [{ id: 0, text: "Pogrubienia" }, { id: 1, text: "Złamania linii" }, { id: 2, text: "Wstawienia obrazka" }, { id: 3, text: "Tworzenia tabeli" }],
                goodAnswer: 1
            },
            {
                id: 111,
                title: "Która z metod HTTP jest uważana za bezpieczną (nie zmienia stanu serwera)?",
                answers: [{ id: 0, text: "POST" }, { id: 1, text: "GET" }, { id: 2, text: "DELETE" }, { id: 3, text: "PUT" }],
                goodAnswer: 1
            },
            {
                id: 112,
                title: "W CSS 'cursor: pointer' zmieni kursor na:",
                answers: [{ id: 0, text: "Strzałkę" }, { id: 1, text: "Rączkę (wskaźnik)" }, { id: 2, text: "Klepsydrę" }, { id: 3, text: "Tekstowy" }],
                goodAnswer: 1
            },
            {
                id: 113,
                title: "W SQL klauzula 'HAVING' jest używana do filtrowania:",
                answers: [{ id: 0, text: "Wierszy" }, { id: 1, text: "Grup" }, { id: 2, text: "Kolumn" }, { id: 3, text: "Baz danych" }],
                goodAnswer: 1
            },
            {
                id: 114,
                title: "W JS 'document.querySelector('.klasa')' wybierze:",
                answers: [{ id: 0, text: "Wszystkie elementy z tą klasą" }, { id: 1, text: "Pierwszy element z tą klasą" }, { id: 2, text: "Element o ID klasa" }, { id: 3, text: "Tag o nazwie klasa" }],
                goodAnswer: 1
            },
            {
                id: 115,
                title: "W PHP '$_SESSION' to tablica:",
                answers: [{ id: 0, text: "Lokalna" }, { id: 1, text: "Superglobalna" }, { id: 2, text: "Pusta" }, { id: 3, text: "Chroniona" }],
                goodAnswer: 1
            },
            {
                id: 116,
                title: "Znacznik <nav> w HTML5 oznacza:",
                answers: [{ id: 0, text: "Nawigację" }, { id: 1, text: "Stopkę" }, { id: 2, text: "Nagłówek" }, { id: 3, text: "Obrazek" }],
                goodAnswer: 0
            },
            {
                id: 117,
                title: "W CSS 'font-family' określa:",
                answers: [{ id: 0, text: "Rozmiar" }, { id: 1, text: "Rodzaj czcionki" }, { id: 2, text: "Kolor" }, { id: 3, text: "Styl" }],
                goodAnswer: 1
            },
            {
                id: 118,
                title: "W SQL 'PRIMARY KEY' musi być:",
                answers: [{ id: 0, text: "Unikalny i niepusty" }, { id: 1, text: "Liczbą" }, { id: 2, text: "Tekstem" }, { id: 3, text: "Kluczem obcym" }],
                goodAnswer: 0
            },
            {
                id: 119,
                title: "W JS 'setTimeout()' służy do:",
                answers: [{ id: 0, text: "Pętli" }, { id: 1, text: "Wykonania kodu po opóźnieniu" }, { id: 2, text: "Zatrzymania strony" }, { id: 3, text: "Odświeżenia" }],
                goodAnswer: 1
            },
            {
                id: 120,
                title: "Format .webp to format:",
                answers: [{ id: 0, text: "Audio" }, { id: 1, text: "Graficzny (nowoczesny)" }, { id: 2, text: "Tekstowy" }, { id: 3, text: "Wideo" }],
                goodAnswer: 1
            },
            {
                id: 121,
                title: "W HTML <input type='password'> spowoduje:",
                answers: [{ id: 0, text: "Ukrycie wpisywanych znaków" }, { id: 1, text: "Zablokowanie pola" }, { id: 2, text: "Szyfrowanie bazy" }, { id: 3, text: "Wysłanie maila" }],
                goodAnswer: 0
            },
            {
                id: 122,
                title: "W CSS 'width: 100%' oznacza:",
                answers: [{ id: 0, text: "100 pikseli" }, { id: 1, text: "Szerokość całego ekranu" }, { id: 2, text: "Szerokość elementu nadrzędnego" }, { id: 3, text: "Szerokość czcionki" }],
                goodAnswer: 2
            },
            {
                id: 123,
                title: "W SQL 'DROP DATABASE' usuwa:",
                answers: [{ id: 0, text: "Tabelę" }, { id: 1, text: "Całą bazę danych" }, { id: 2, text: "Rekord" }, { id: 3, text: "Użytkownika" }],
                goodAnswer: 1
            },
            {
                id: 124,
                title: "W JS 'console.error()' wypisuje:",
                answers: [{ id: 0, text: "Informację" }, { id: 1, text: "Błąd w konsoli" }, { id: 2, text: "Ostrzeżenie" }, { id: 3, text: "Alert" }],
                goodAnswer: 1
            },
            {
                id: 125,
                title: "PHP jest językiem wykonywanym po stronie:",
                answers: [{ id: 0, text: "Klienta (przeglądarki)" }, { id: 1, text: "Serwera" }, { id: 2, text: "Bazy danych" }, { id: 3, text: "Routera" }],
                goodAnswer: 1
            },
            {
                id: 126,
                title: "W HTML <ul> to lista:",
                answers: [{ id: 0, text: "Numerowana" }, { id: 1, text: "Punktowana (nienumerowana)" }, { id: 2, text: "Definicji" }, { id: 3, text: "Zagnieżdżona" }],
                goodAnswer: 1
            },
            {
                id: 127,
                title: "W CSS 'background-image: url('foto.jpg')' wstawi:",
                answers: [{ id: 0, text: "Obrazek w treści" }, { id: 1, text: "Obrazek jako tło" }, { id: 2, text: "Link do obrazka" }, { id: 3, text: "Ikonę strony" }],
                goodAnswer: 1
            },
            {
                id: 128,
                title: "W SQL 'JOIN' służy do:",
                answers: [{ id: 0, text: "Usuwania" }, { id: 1, text: "Łączenia tabel" }, { id: 2, text: "Sortowania" }, { id: 3, text: "Grupowania" }],
                goodAnswer: 1
            },
            {
                id: 129,
                title: "W JS 'array.pop()' usuwa:",
                answers: [{ id: 0, text: "Pierwszy element" }, { id: 1, text: "Ostatni element" }, { id: 2, text: "Całą tablicę" }, { id: 3, text: "Losowy element" }],
                goodAnswer: 1
            },
            {
                id: 130,
                title: "Model barw wykorzystywany w druku to:",
                answers: [{ id: 0, text: "RGB" }, { id: 1, text: "CMYK" }, { id: 2, text: "HSB" }, { id: 3, text: "Lab" }],
                goodAnswer: 1
            },
            {
                id: 131,
                title: "W HTML5 znacznik <footer> to:",
                answers: [{ id: 0, text: "Nagłówek" }, { id: 1, text: "Stopka" }, { id: 2, text: "Bok" }, { id: 3, text: "Menu" }],
                goodAnswer: 1
            },
            {
                id: 132,
                title: "W CSS 'padding' to margines:",
                answers: [{ id: 0, text: "Zewnętrzny" }, { id: 1, text: "Wewnętrzny" }, { id: 2, text: "Dolny" }, { id: 3, text: "Lewy" }],
                goodAnswer: 1
            },
            {
                id: 133,
                title: "W SQL 'AS' służy do:",
                answers: [{ id: 0, text: "Sortowania" }, { id: 1, text: "Nadawania aliasu" }, { id: 2, text: "Łączenia" }, { id: 3, text: "Sumowania" }],
                goodAnswer: 1
            },
            {
                id: 134,
                title: "W JS 'localStorage' przechowuje dane:",
                answers: [{ id: 0, text: "Do zamknięcia karty" }, { id: 1, text: "Trwale w przeglądarce" }, { id: 2, text: "Na serwerze" }, { id: 3, text: "W bazie danych" }],
                goodAnswer: 1
            },
            {
                id: 135,
                title: "W PHP 'include_once' zapobiega:",
                answers: [{ id: 0, text: "Błędom składni" }, { id: 1, text: "Wielokrotnemu dołączeniu tego samego pliku" }, { id: 2, text: "Włamaniom" }, { id: 3, text: "Usuwaniu plików" }],
                goodAnswer: 1
            },
            {
                id: 136,
                title: "Znacznik <title> wyświetla się w:",
                answers: [{ id: 0, text: "Treści strony" }, { id: 1, text: "Pasku tytułu okna przeglądarki" }, { id: 2, text: "Stopce" }, { id: 3, text: "Konsoli" }],
                goodAnswer: 1
            },
            {
                id: 137,
                title: "W CSS 'border: none' spowoduje:",
                answers: [{ id: 0, text: "Cienkie obramowanie" }, { id: 1, text: "Brak obramowania" }, { id: 2, text: "Czerwone obramowanie" }, { id: 3, text: "Podwójne obramowanie" }],
                goodAnswer: 1
            },
            {
                id: 138,
                title: "W SQL 'MIN()' zwraca:",
                answers: [{ id: 0, text: "Średnią" }, { id: 1, text: "Wartość minimalną" }, { id: 2, text: "Suma" }, { id: 3, text: "Ilość" }],
                goodAnswer: 1
            },
            {
                id: 139,
                title: "W JS 'addEventListener' służy do:",
                answers: [{ id: 0, text: "Zmiany koloru" }, { id: 1, text: "Obsługi zdarzeń" }, { id: 2, text: "Pętli" }, { id: 3, text: "Łączenia z DB" }],
                goodAnswer: 1
            },
            {
                id: 140,
                title: "Rozdzielczość ekranowa (web) to standardowo:",
                answers: [{ id: 0, text: "300 dpi" }, { id: 1, text: "72 dpi" }, { id: 2, text: "600 dpi" }, { id: 3, text: "1200 dpi" }],
                goodAnswer: 1
            },
            {
                id: 141,
                title: "W HTML <form> atrybut 'enctype' jest ważny przy:",
                answers: [{ id: 0, text: "Logowaniu" }, { id: 1, text: "Przesyłaniu plików" }, { id: 2, text: "Wybieraniu koloru" }, { id: 3, text: "Rejestracji" }],
                goodAnswer: 1
            },
            {
                id: 142,
                title: "W CSS 'text-transform: uppercase' zmieni tekst na:",
                answers: [{ id: 0, text: "Małe litery" }, { id: 1, text: "WIELKIE LITERY" }, { id: 2, text: "Pogrubione" }, { id: 3, text: "Kursywę" }],
                goodAnswer: 1
            },
            {
                id: 143,
                title: "W SQL 'DESC' przy ORDER BY oznacza:",
                answers: [{ id: 0, text: "Opis" }, { id: 1, text: "Kolejność malejącą" }, { id: 2, text: "Kolejność rosnącą" }, { id: 3, text: "Ukrycie danych" }],
                goodAnswer: 1
            },
            {
                id: 144,
                title: "W JS 'typeof []' (tablicy) zwróci:",
                answers: [{ id: 0, text: "array" }, { id: 1, text: "object" }, { id: 2, text: "list" }, { id: 3, text: "null" }],
                goodAnswer: 1
            },
            {
                id: 145,
                title: "W PHP '$a .' '. $b' kropka to:",
                answers: [{ id: 0, text: "Mnożenie" }, { id: 1, text: "Konkatenacja" }, { id: 2, text: "Dzielenie" }, { id: 3, text: "Błąd" }],
                goodAnswer: 1
            },
            {
                id: 146,
                title: "Atrybut 'src' w <img> określa:",
                answers: [{ id: 0, text: "Rozmiar" }, { id: 1, text: "Źródło (ścieżkę do pliku)" }, { id: 2, text: "Tekst" }, { id: 3, text: "Obramowanie" }],
                goodAnswer: 1
            },
            {
                id: 147,
                title: "W CSS 'position: relative' pozycjonuje względem:",
                answers: [{ id: 0, text: "Okna" }, { id: 1, text: "Pierwotnego położenia" }, { id: 2, text: "Rodzica" }, { id: 3, text: "Góry strony" }],
                goodAnswer: 1
            },
            {
                id: 148,
                title: "W SQL 'UPDATE ... SET' służy do:",
                answers: [{ id: 0, text: "Tworzenia" }, { id: 1, text: "Aktualizacji danych" }, { id: 2, text: "Usuwania" }, { id: 3, text: "Uprawnień" }],
                goodAnswer: 1
            },
            {
                id: 149,
                title: "W JS 'window.location.href' pozwala na:",
                answers: [{ id: 0, text: "Zmiany koloru" }, { id: 1, text: "Przekierowanie na inny URL" }, { id: 2, text: "Zamknięcie okna" }, { id: 3, text: "Wydruk" }],
                goodAnswer: 1
            },
            {
                id: 150,
                title: "Atrybut HTML 'target=_self' to:",
                answers: [{ id: 0, text: "Nowa karta" }, { id: 1, text: "To samo okno" }, { id: 2, text: "Rodzic" }, { id: 3, text: "Góra" }],
                goodAnswer: 1
            },
            {
                id: 151,
                title: "W CSS 'visibility: hidden' sprawia, że:",
                answers: [{ id: 0, text: "Element znika i nie zajmuje miejsca" }, { id: 1, text: "Element jest niewidoczny, ale zajmuje miejsce" }, { id: 2, text: "Element jest półprzezroczysty" }, { id: 3, text: "Element jest czerwony" }],
                goodAnswer: 1
            },
            {
                id: 152,
                title: "W SQL 'CREATE INDEX' służy do:",
                answers: [{ id: 0, text: "Tworzenia tabeli" }, { id: 1, text: "Przyspieszenia wyszukiwania" }, { id: 2, text: "Usuwania duplikatów" }, { id: 3, text: "Relacji" }],
                goodAnswer: 1
            },
            {
                id: 153,
                title: "W JS 'JSON.parse()' zamienia:",
                answers: [{ id: 0, text: "Obiekt na tekst" }, { id: 1, text: "Tekst JSON na obiekt" }, { id: 2, text: "Liczbę na tekst" }, { id: 3, text: "Obraz na tekst" }],
                goodAnswer: 1
            },
            {
                id: 154,
                title: "W PHP '$_COOKIE' służy do:",
                answers: [{ id: 0, text: "Sesji" }, { id: 1, text: "Obsługi ciasteczek" }, { id: 2, text: "Bazy danych" }, { id: 3, text: "Hasłowania" }],
                goodAnswer: 1
            },
            {
                id: 155,
                title: "Znacznik <option> występuje wewnątrz:",
                answers: [{ id: 0, text: "<ul>" }, { id: 1, text: "<select>" }, { id: 2, text: "<table>" }, { id: 3, text: "<div>" }],
                goodAnswer: 1
            },
            {
                id: 156,
                title: "W CSS 'overflow: scroll' doda:",
                answers: [{ id: 0, text: "Cień" }, { id: 1, text: "Paski przewijania" }, { id: 2, text: "Kolor" }, { id: 3, text: "Margines" }],
                goodAnswer: 1
            },
            {
                id: 157,
                title: "W SQL 'NOT NULL' oznacza, że kolumna:",
                answers: [{ id: 0, text: "Może być pusta" }, { id: 1, text: "Musi zawierać wartość" }, { id: 2, text: "Musi być zerem" }, { id: 3, text: "Jest kluczem" }],
                goodAnswer: 1
            },
            {
                id: 158,
                title: "W JS 'Math.floor(4.9)' zwróci:",
                answers: [{ id: 0, text: "5" }, { id: 1, text: "4" }, { id: 2, text: "4.5" }, { id: 3, text: "0" }],
                goodAnswer: 1
            },
            {
                id: 159,
                title: "W PHP funkcja 'fopen()' służy do:",
                answers: [{ id: 0, text: "Bazy danych" }, { id: 1, text: "Otwarcia pliku" }, { id: 2, text: "Wysłania maila" }, { id: 3, text: "Sesji" }],
                goodAnswer: 1
            },
            {
                id: 160,
                title: "Jaki protokół służy do przesyłania stron WWW?",
                answers: [{ id: 0, text: "FTP" }, { id: 1, text: "HTTP" }, { id: 2, text: "SMTP" }, { id: 3, text: "POP3" }],
                goodAnswer: 1
            },
            {
                id: 161,
                title: "W CSS 'max-width' określa:",
                answers: [{ id: 0, text: "Stałą szerokość" }, { id: 1, text: "Maksymalną szerokość" }, { id: 2, text: "Minimalną szerokość" }, { id: 3, text: "Szerokość czcionki" }],
                goodAnswer: 1
            },
            {
                id: 162,
                title: "W SQL 'AND' wymaga, aby:",
                answers: [{ id: 0, text: "Jeden warunek był spełniony" }, { id: 1, text: "Oba warunki były spełnione" }, { id: 2, text: "Żaden nie był spełniony" }, { id: 3, text: "Zwrócono błąd" }],
                goodAnswer: 1
            },
            {
                id: 163,
                title: "W JS 'String(123)' zamieni liczbę na:",
                answers: [{ id: 0, text: "Obiekt" }, { id: 1, text: "Tekst" }, { id: 2, text: "Tablicę" }, { id: 3, text: "Null" }],
                goodAnswer: 1
            },
            {
                id: 164,
                title: "W PHP 'setcookie()' musi być wywołane:",
                answers: [{ id: 0, text: "Na końcu" }, { id: 1, text: "Przed wysłaniem nagłówków" }, { id: 2, text: "Wewnątrz <body>" }, { id: 3, text: "Tylko w JS" }],
                goodAnswer: 1
            },
            {
                id: 165,
                title: "Tag <head> zawiera informacje:",
                answers: [{ id: 0, text: "Widoczne na stronie" }, { id: 1, text: "Techniczne (metadane)" }, { id: 2, text: "Tylko skrypty" }, { id: 3, text: "Stopkę" }],
                goodAnswer: 1
            },
            {
                id: 166,
                title: "W CSS 'color: #FF0000' to kolor:",
                answers: [{ id: 0, text: "Zielony" }, { id: 1, text: "Czerwony" }, { id: 2, text: "Niebieski" }, { id: 3, text: "Biały" }],
                goodAnswer: 1
            },
            {
                id: 167,
                title: "W SQL 'DELETE FROM tabela' bez WHERE:",
                answers: [{ id: 0, text: "Nic nie zrobi" }, { id: 1, text: "Usunie wszystkie rekordy" }, { id: 2, text: "Usunie tabelę" }, { id: 3, text: "Zgłosi błąd" }],
                goodAnswer: 1
            },
            {
                id: 168,
                title: "W JS 'NaN === NaN' zwróci:",
                answers: [{ id: 0, text: "true" }, { id: 1, text: "false" }, { id: 2, text: "undefined" }, { id: 3, text: "null" }],
                goodAnswer: 1
            },
            {
                id: 169,
                title: "W PHP '$_SERVER['REMOTE_ADDR']' to:",
                answers: [{ id: 0, text: "Adres serwera" }, { id: 1, text: "Adres IP użytkownika" }, { id: 2, text: "Adres bazy" }, { id: 3, text: "URL strony" }],
                goodAnswer: 1
            },
            {
                id: 170,
                title: "Atrybut 'alt' w <img> jest ważny dla:",
                answers: [{ id: 0, text: "SEO i czytników ekranu" }, { id: 1, text: "Rozmiaru" }, { id: 2, text: "Szybkości ładowania" }, { id: 3, text: "Koloru" }],
                goodAnswer: 0
            },
            {
                id: 171,
                title: "W CSS 'display: block' sprawia, że element:",
                answers: [{ id: 0, text: "Jest w linii" }, { id: 1, text: "Zajmuje całą szerokość i zaczyna się od nowej linii" }, { id: 2, text: "Jest ukryty" }, { id: 3, text: "Jest elastyczny" }],
                goodAnswer: 1
            },
            {
                id: 172,
                title: "W SQL 'BETWEEN 10 AND 20' wybierze:",
                answers: [{ id: 0, text: "Tylko 10 i 20" }, { id: 1, text: "Zakres od 10 do 20" }, { id: 2, text: "Liczby poza zakresem" }, { id: 3, text: "Wszystko" }],
                goodAnswer: 1
            },
            {
                id: 173,
                title: "W JS 'array.length = 0' spowoduje:",
                answers: [{ id: 0, text: "Błąd" }, { id: 1, text: "Wyczyszczenie tablicy" }, { id: 2, text: "Nic" }, { id: 3, text: "Dodanie elementu" }],
                goodAnswer: 1
            },
            {
                id: 174,
                title: "W PHP 'header('Location: page.php')' to:",
                answers: [{ id: 0, text: "Tytuł strony" }, { id: 1, text: "Przekierowanie" }, { id: 2, text: "Łącze" }, { id: 3, text: "Błąd" }],
                goodAnswer: 1
            },
            {
                id: 175,
                title: "Znacznik <iframe> służy do:",
                answers: [{ id: 0, text: "Obrazków" }, { id: 1, text: "Osadzania innej strony wewnątrz bieżącej" }, { id: 2, text: "Listy" }, { id: 3, text: "Skryptów" }],
                goodAnswer: 1
            },
            {
                id: 176,
                title: "W CSS 'letter-spacing' to:",
                answers: [{ id: 0, text: "Interlinia" }, { id: 1, text: "Odstępy między literami" }, { id: 2, text: "Margines" }, { id: 3, text: "Padding" }],
                goodAnswer: 1
            },
            {
                id: 177,
                title: "W SQL 'IN (1, 2, 3)' sprawdza czy wartość:",
                answers: [{ id: 0, text: "Jest większa od 3" }, { id: 1, text: "Znajduje się w podanej liście" }, { id: 2, text: "Jest sumą" }, { id: 3, text: "Jest zerem" }],
                goodAnswer: 1
            },
            {
                id: 178,
                title: "W JS '!!true' zwróci:",
                answers: [{ id: 0, text: "false" }, { id: 1, text: "true" }, { id: 2, text: "0" }, { id: 3, text: "1" }],
                goodAnswer: 1
            },
            {
                id: 179,
                title: "W PHP funkcja 'password_hash()' służy do:",
                answers: [{ id: 0, text: "Logowania" }, { id: 1, text: "Bezpiecznego szyfrowania hasła" }, { id: 2, text: "Zmiany hasła" }, { id: 3, text: "Sesji" }],
                goodAnswer: 1
            },
            {
                id: 180,
                title: "Plik .htaccess służy do:",
                answers: [{ id: 0, text: "Bazy danych" }, { id: 1, text: "Konfiguracji serwera Apache" }, { id: 2, text: "Stylów" }, { id: 3, text: "Skryptów" }],
                goodAnswer: 1
            },
            {
                id: 181,
                title: "W CSS 'z-index' działa tylko dla elementów:",
                answers: [{ id: 0, text: "Ukrytych" }, { id: 1, text: "Pozycjonowanych (innych niż static)" }, { id: 2, text: "Blokowych" }, { id: 3, text: "List" }],
                goodAnswer: 1
            },
            {
                id: 182,
                title: "W SQL 'DROP COLUMN' usuwa:",
                answers: [{ id: 0, text: "Wiersz" }, { id: 1, text: "Kolumnę z tabeli" }, { id: 2, text: "Tabelę" }, { id: 3, text: "Bazę" }],
                goodAnswer: 1
            },
            {
                id: 183,
                title: "W JS 'document.createElement()' tworzy:",
                answers: [{ id: 0, text: "Atrybut" }, { id: 1, text: "Nowy element HTML" }, { id: 2, text: "Tekst" }, { id: 3, text: "Styl" }],
                goodAnswer: 1
            },
            {
                id: 184,
                title: "W PHP '$_FILES' zawiera:",
                answers: [{ id: 0, text: "Tekst" }, { id: 1, text: "Dane o przesłanych plikach" }, { id: 2, text: "Błędy" }, { id: 3, text: "URL" }],
                goodAnswer: 1
            },
            {
                id: 185,
                title: "Atrybut 'placeholder' w <input> to:",
                answers: [{ id: 0, text: "Wartość domyślna" }, { id: 1, text: "Tekst pomocniczy widoczny przed wpisaniem" }, { id: 2, text: "Hasło" }, { id: 3, text: "Błąd" }],
                goodAnswer: 1
            },
            {
                id: 186,
                title: "W CSS 'white-space: nowrap' spowoduje:",
                answers: [{ id: 0, text: "Ukrycie spacji" }, { id: 1, text: "Brak zawijania tekstu do nowej linii" }, { id: 2, text: "Pogrubienie" }, { id: 3, text: "Kursywę" }],
                goodAnswer: 1
            },
            {
                id: 187,
                title: "W SQL 'UNION' służy do:",
                answers: [{ id: 0, text: "Mnożenia wyników" }, { id: 1, text: "Łączenia wyników dwóch zapytań SELECT" }, { id: 2, text: "Usuwania" }, { id: 3, text: "Grupowania" }],
                goodAnswer: 1
            },
            {
                id: 188,
                title: "W JS 'prompt()' zwraca:",
                answers: [{ id: 0, text: "Liczbę" }, { id: 1, text: "String (tekst) lub null" }, { id: 2, text: "Boolean" }, { id: 3, text: "Obiekt" }],
                goodAnswer: 1
            },
            {
                id: 189,
                title: "W PHP funkcja 'strlen()' zwraca:",
                answers: [{ id: 0, text: "Słowa" }, { id: 1, text: "Długość ciągu znaków" }, { id: 2, text: "Wielkie litery" }, { id: 3, text: "Błędy" }],
                goodAnswer: 1
            },
            {
                id: 190,
                title: "Czym jest 'favicon'?",
                answers: [{ id: 0, text: "Dużym zdjęciem" }, { id: 1, text: "Małą ikonką widoczną na karcie przeglądarki" }, { id: 2, text: "Skryptem" }, { id: 3, text: "Stylem" }],
                goodAnswer: 1
            },
            {
                id: 191,
                title: "W CSS 'box-shadow' dodaje:",
                answers: [{ id: 0, text: "Margines" }, { id: 1, text: "Cień wokół elementu" }, { id: 2, text: "Obramowanie" }, { id: 3, text: "Kolor" }],
                goodAnswer: 1
            },
            {
                id: 192,
                title: "W SQL 'AUTO_INCREMENT' to:",
                answers: [{ id: 0, text: "Ręczne wpisywanie" }, { id: 1, text: "Automatyczne zwiększanie wartości (np. ID)" }, { id: 2, text: "Sortowanie" }, { id: 3, text: "Usuwania" }],
                goodAnswer: 1
            },
            {
                id: 193,
                title: "W JS '===' nazywany jest operatorem:",
                answers: [{ id: 0, text: "Przypisania" }, { id: 1, text: "Ścisłej równości" }, { id: 2, text: "Logiki" }, { id: 3, text: "Różności" }],
                goodAnswer: 1
            },
            {
                id: 194,
                title: "W PHP '$_REQUEST' zawiera dane z:",
                answers: [{ id: 0, text: "Tylko GET" }, { id: 1, text: "GET, POST i COOKIE" }, { id: 2, text: "Tylko SESSION" }, { id: 3, text: "Bazy danych" }],
                goodAnswer: 1
            },
            {
                id: 195,
                title: "Który znacznik HTML definiuje najważniejszy nagłówek?",
                answers: [{ id: 0, text: "<h6>" }, { id: 1, text: "<h1>" }, { id: 2, text: "<head>" }, { id: 3, text: "<header>" }],
                goodAnswer: 1
            },
            {
                id: 196,
                title: "W CSS 'text-decoration: underline' to:",
                answers: [{ id: 0, text: "Pogrubienie" }, { id: 1, text: "Podkreślenie" }, { id: 2, text: "Przekreślenie" }, { id: 3, text: "Nadkreślenie" }],
                goodAnswer: 1
            },
            {
                id: 197,
                title: "W SQL 'DATABASE()' zwraca:",
                answers: [{ id: 0, text: "Wszystkie bazy" }, { id: 1, text: "Nazwę bieżącej bazy danych" }, { id: 2, text: "Wersję" }, { id: 3, text: "Użytkownika" }],
                goodAnswer: 1
            },
            {
                id: 198,
                title: "W JS 'event.preventDefault()' służy do:",
                answers: [{ id: 0, text: "Wywołania błędu" }, { id: 1, text: "Zatrzymania domyślnej akcji zdarzenia" }, { id: 2, text: "Odświeżenia" }, { id: 3, text: "Wysłania danych" }],
                goodAnswer: 1
            },
            {
                id: 199,
                title: "W PHP 'echo' i 'print' służą do:",
                answers: [{ id: 0, text: "Obliczeń" }, { id: 1, text: "Wyświetlania tekstu na stronie" }, { id: 2, text: "Łączenia z DB" }, { id: 3, text: "Pętli" }],
                goodAnswer: 1
            },
            {
                id: 200,
                title: "Skrót WWW oznacza:",
                answers: [{ id: 0, text: "Web Wide World" }, { id: 1, text: "World Wide Web" }, { id: 2, text: "World Web Wide" }, { id: 3, text: "Wide World Web" }],
                goodAnswer: 1
            },
            {
                id: 201,
                title: "Która właściwość CSS odpowiada za wyrównanie elementów w osi głównej kontenera Flex?",
                answers: [{ id: 0, text: "align-items" }, { id: 1, text: "justify-content" }, { id: 2, text: "align-content" }, { id: 3, text: "flex-direction" }],
                goodAnswer: 1
            },
            {
                id: 202,
                title: "W języku SQL, aby połączyć ciągi znaków, w MySQL należy użyć funkcji:",
                answers: [{ id: 0, text: "CONCAT()" }, { id: 1, text: "JOIN()" }, { id: 2, text: "MERGE()" }, { id: 3, text: "COMBINE()" }],
                goodAnswer: 0
            },
            {
                id: 203,
                title: "W HTML5 znacznik <audio> z atrybutem 'autoplay' spowoduje:",
                answers: [{ id: 0, text: "Wyświetlenie kontrolek" }, { id: 1, text: "Automatyczne odtworzenie dźwięku" }, { id: 2, text: "Odtwarzanie w pętli" }, { id: 3, text: "Wyciszenie dźwięku" }],
                goodAnswer: 1
            },
            {
                id: 204,
                title: "W PHP funkcja 'session_destroy()' służy do:",
                answers: [{ id: 0, text: "Rozpoczęcia sesji" }, { id: 1, text: "Usunięcia wszystkich danych sesji" }, { id: 2, text: "Zmiany ID sesji" }, { id: 3, text: "Zapisania sesji w bazie" }],
                goodAnswer: 1
            },
            {
                id: 205,
                title: "Który selektor CSS wybiera wszystkie elementy <p>, które są bezpośrednimi dziećmi <div>?",
                answers: [{ id: 0, text: "div p" }, { id: 1, text: "div > p" }, { id: 2, text: "div + p" }, { id: 3, text: "div ~ p" }],
                goodAnswer: 1
            },
            {
                id: 206,
                title: "W JavaScript 'const' służy do deklarowania:",
                answers: [{ id: 0, text: "Zmiennych o zasięgu globalnym" }, { id: 1, text: "Stałych, których nie można przypisać ponownie" }, { id: 2, text: "Funkcji asynchronicznych" }, { id: 3, text: "Tablic dynamicznych" }],
                goodAnswer: 1
            },
            {
                id: 207,
                title: "W SQL polecenie 'ALTER TABLE' z klauzulą 'ADD' służy do:",
                answers: [{ id: 0, text: "Usunięcia kolumny" }, { id: 1, text: "Dodania nowej kolumny do tabeli" }, { id: 2, text: "Zmiany nazwy tabeli" }, { id: 3, text: "Dodania rekordu" }],
                goodAnswer: 1
            },
            {
                id: 208,
                title: "Który znacznik HTML służy do zgrupowania powiązanych elementów w formularzu?",
                answers: [{ id: 0, text: "<group>" }, { id: 1, text: "<fieldset>" }, { id: 2, text: "<section>" }, { id: 3, text: "<label>" }],
                goodAnswer: 1
            },
            {
                id: 209,
                title: "W CSS właściwość 'position: absolute' pozycjonuje element względem:",
                answers: [{ id: 0, text: "Okna przeglądarki" }, { id: 1, text: "Najbliższego pozycjonowanego przodka" }, { id: 2, text: "Poprzedniego elementu" }, { id: 3, text: "Góry strony" }],
                goodAnswer: 1
            },
            {
                id: 210,
                title: "W PHP funkcja 'mysqli_num_rows()' zwraca:",
                answers: [{ id: 0, text: "Liczbę kolumn w wyniku" }, { id: 1, text: "Liczbę wierszy w wyniku zapytania" }, { id: 2, text: "Liczbę baz danych" }, { id: 3, text: "Błąd połączenia" }],
                goodAnswer: 1
            },
            {
                id: 211,
                title: "Jak w JS pobrać pierwszy element o klasie 'test'?",
                answers: [{ id: 0, text: "getElementByClass('test')" }, { id: 1, text: "querySelector('.test')" }, { id: 2, text: "querySelectorAll('.test')" }, { id: 3, text: "getElementById('.test')" }],
                goodAnswer: 1
            },
            {
                id: 212,
                title: "W modelu barw RGB, kolor biały zapisany szesnastkowo to:",
                answers: [{ id: 0, text: "#000000" }, { id: 1, text: "#FFFFFF" }, { id: 2, text: "#FF0000" }, { id: 3, text: "#111111" }],
                goodAnswer: 1
            },
            {
                id: 213,
                title: "W SQL operator 'NOT LIKE 'A%'' znajdzie teksty:",
                answers: [{ id: 0, text: "Zaczynające się na A" }, { id: 1, text: "Niezaczynające się na literę A" }, { id: 2, text: "Kończące się na A" }, { id: 3, text: "Zawierające tylko A" }],
                goodAnswer: 1
            },
            {
                id: 214,
                title: "W HTML5 znacznik <label> łączy się z polem input za pomocą atrybutu:",
                answers: [{ id: 0, text: "name" }, { id: 1, text: "for" }, { id: 2, text: "id" }, { id: 3, text: "connect" }],
                goodAnswer: 1
            },
            {
                id: 215,
                title: "W CSS 'display: inline-block' sprawia, że element:",
                answers: [{ id: 0, text: "Jest niewidoczny" }, { id: 1, text: "Zachowuje się jak tekst, ale przyjmuje szerokość i wysokość" }, { id: 2, text: "Rozciąga się na całą stronę" }, { id: 3, text: "Jest usuwany z DOM" }],
                goodAnswer: 1
            },
            {
                id: 216,
                title: "W PHP funkcja 'is_int()' sprawdza czy:",
                answers: [{ id: 0, text: "Zmienna jest ciągiem" }, { id: 1, text: "Zmienna jest liczbą całkowitą" }, { id: 2, text: "Zmienna istnieje" }, { id: 3, text: "Zmienna jest pusta" }],
                goodAnswer: 1
            },
            {
                id: 217,
                title: "W JavaScript metoda 'array.shift()' usuwa:",
                answers: [{ id: 0, text: "Ostatni element" }, { id: 1, text: "Pierwszy element" }, { id: 2, text: "Wybrany element" }, { id: 3, text: "Całą tablicę" }],
                goodAnswer: 1
            },
            {
                id: 218,
                title: "W SQL klauzula 'LIMIT 5' spowoduje:",
                answers: [{ id: 0, text: "Pominięcie 5 rekordów" }, { id: 1, text: "Pobranie maksymalnie 5 rekordów" }, { id: 2, text: "Usunięcie 5 rekordów" }, { id: 3, text: "Sortowanie 5 kolumn" }],
                goodAnswer: 1
            },
            {
                id: 219,
                title: "Który atrybut w HTML pozwala na otwarcie linku w nowym oknie?",
                answers: [{ id: 0, text: "target='_new'" }, { id: 1, text: "target='_blank'" }, { id: 2, text: "target='_parent'" }, { id: 3, text: "target='_top'" }],
                goodAnswer: 1
            },
            {
                id: 220,
                title: "W CSS właściwość 'list-style-type: none' stosuje się do:",
                answers: [{ id: 0, text: "Usunięcia obramowania tabeli" }, { id: 1, text: "Usunięcia wypunktowania listy" }, { id: 2, text: "Ukrycia tekstu" }, { id: 3, text: "Zmiany czcionki" }],
                goodAnswer: 1
            },
            {
                id: 221,
                title: "W PHP tablica '$_GET' przechowuje dane przesyłane:",
                answers: [{ id: 0, text: "W nagłówku" }, { id: 1, text: "W adresie URL" }, { id: 2, text: "W ciasteczkach" }, { id: 3, text: "W sesji" }],
                goodAnswer: 1
            },
            {
                id: 222,
                title: "W JS pętla 'for...in' służy głównie do iteracji po:",
                answers: [{ id: 0, text: "Wartościach tablicy" }, { id: 1, text: "Właściwościach obiektu" }, { id: 2, text: "Plikach" }, { id: 3, text: "Bazie danych" }],
                goodAnswer: 1
            },
            {
                id: 223,
                title: "W SQL polecenie 'DELETE' bez klauzuli 'WHERE':",
                answers: [{ id: 0, text: "Usuwa tylko pierwszy wiersz" }, { id: 1, text: "Usuwa wszystkie wiersze z tabeli" }, { id: 2, text: "Usuwa strukturę tabeli" }, { id: 3, text: "Zwraca błąd składni" }],
                goodAnswer: 1
            },
            {
                id: 224,
                title: "Atrybut 'rows' i 'cols' są charakterystyczne dla znacznika:",
                answers: [{ id: 0, text: "<input>" }, { id: 1, text: "<textarea>" }, { id: 2, text: "<table>" }, { id: 3, text: "<form>" }],
                goodAnswer: 1
            },
            {
                id: 225,
                title: "W CSS selektor ':nth-child(2n)' wybierze elementy:",
                answers: [{ id: 0, text: "Tylko drugi element" }, { id: 1, text: "Wszystkie parzyste elementy" }, { id: 2, text: "Wszystkie nieparzyste" }, { id: 3, text: "Pierwsze dwa elementy" }],
                goodAnswer: 1
            },
            {
                id: 226,
                title: "W PHP funkcja 'strip_tags()' służy do:",
                answers: [{ id: 0, text: "Dodawania tagów HTML" }, { id: 1, text: "Usuwania tagów HTML z ciągu znaków" }, { id: 2, text: "Formatowania tekstu" }, { id: 3, text: "Szyfrowania danych" }],
                goodAnswer: 1
            },
            {
                id: 227,
                title: "W JS metoda 'indexOf()' zwraca -1 gdy:",
                answers: [{ id: 0, text: "Element jest na początku" }, { id: 1, text: "Nie znaleziono elementu" }, { id: 2, text: "Tablica jest pusta" }, { id: 3, text: "Wystąpił błąd krytyczny" }],
                goodAnswer: 1
            },
            {
                id: 228,
                title: "W SQL 'PRIMARY KEY' w tabeli może wystąpić:",
                answers: [{ id: 0, text: "Wiele razy" }, { id: 1, text: "Tylko raz" }, { id: 2, text: "Maksymalnie dwa razy" }, { id: 3, text: "Dowolną ilość razy" }],
                goodAnswer: 1
            },
            {
                id: 229,
                title: "Znacznik <iframe> w HTML wymaga atrybutu:",
                answers: [{ id: 0, text: "href" }, { id: 1, text: "src" }, { id: 2, text: "link" }, { id: 3, text: "source" }],
                goodAnswer: 1
            },
            {
                id: 230,
                title: "W CSS jednostka 'rem' odnosi się do rozmiaru czcionki:",
                answers: [{ id: 0, text: "Elementu nadrzędnego" }, { id: 1, text: "Elementu głównego (root - html)" }, { id: 2, text: "Ekranu" }, { id: 3, text: "Przeglądarki" }],
                goodAnswer: 1
            },
            {
                id: 231,
                title: "W PHP funkcja 'file_exists()' sprawdza:",
                answers: [{ id: 0, text: "Rozmiar pliku" }, { id: 1, text: "Czy plik lub katalog istnieje" }, { id: 2, text: "Typ pliku" }, { id: 3, text: "Uprawnienia zapisu" }],
                goodAnswer: 1
            },
            {
                id: 232,
                title: "W JS operator '||' to:",
                answers: [{ id: 0, text: "Logiczne AND" }, { id: 1, text: "Logiczne OR" }, { id: 2, text: "Negacja" }, { id: 3, text: "Modulo" }],
                goodAnswer: 1
            },
            {
                id: 233,
                title: "W SQL 'UPDATE tabela SET kolumna = NULL' spowoduje:",
                answers: [{ id: 0, text: "Usunięcie kolumny" }, { id: 1, text: "Ustawienie wartości kolumny na pustą (null)" }, { id: 2, text: "Błąd ponieważ NULL jest zakazany" }, { id: 3, text: "Usunięcie wierszy" }],
                goodAnswer: 1
            },
            {
                id: 234,
                title: "Który z wymienionych formatów jest formatem wektorowym?",
                answers: [{ id: 0, text: "GIF" }, { id: 1, text: "AI" }, { id: 2, text: "BMP" }, { id: 3, text: "TIFF" }],
                goodAnswer: 1
            },
            {
                id: 235,
                title: "W CSS właściwość 'clear: both' służy do:",
                answers: [{ id: 0, text: "Wyczyszczenia pamięci" }, { id: 1, text: "Zablokowania opływania elementu z obu stron" }, { id: 2, text: "Resetowania stylów" }, { id: 3, text: "Usunięcia tła" }],
                goodAnswer: 1
            },
            {
                id: 236,
                title: "W PHP funkcja 'date('H')' zwróci:",
                answers: [{ id: 0, text: "Dzień miesiąca" }, { id: 1, text: "Godzinę w formacie 24-godzinnym" }, { id: 2, text: "Minuty" }, { id: 3, text: "Rok" }],
                goodAnswer: 1
            },
            {
                id: 237,
                title: "W JS funkcja 'Math.ceil(4.1)' zwróci:",
                answers: [{ id: 0, text: "4" }, { id: 1, text: "5" }, { id: 2, text: "4.1" }, { id: 3, text: "0" }],
                goodAnswer: 1
            },
            {
                id: 238,
                title: "W SQL klauzula 'LIKE '_a%'' wyszuka ciągi:",
                answers: [{ id: 0, text: "Zaczynające się na a" }, { id: 1, text: "Mające literę 'a' na drugim miejscu" }, { id: 2, text: "Kończące się na a" }, { id: 3, text: "Dowolne" }],
                goodAnswer: 1
            },
            {
                id: 239,
                title: "W dokumencie HTML znacznik <meta name='viewport'> służy do:",
                answers: [{ id: 0, text: "Opisu strony dla Google" }, { id: 1, text: "Dostosowania widoku na urządzeniach mobilnych" }, { id: 2, text: "Ustawienia kodowania" }, { id: 3, text: "Odświeżania strony" }],
                goodAnswer: 1
            },
            {
                id: 240,
                title: "W CSS właściwość 'font-style: italic' odpowiada za:",
                answers: [{ id: 0, text: "Pogrubienie" }, { id: 1, text: "Pochylenie (kursywę)" }, { id: 2, text: "Podkreślenie" }, { id: 3, text: "Wielkość liter" }],
                goodAnswer: 1
            },
            {
                id: 241,
                title: "W PHP funkcja 'explode()' służy do:",
                answers: [{ id: 0, text: "Łączenia tablic" }, { id: 1, text: "Rozbicia ciągu znaków na tablicę" }, { id: 2, text: "Usuwania plików" }, { id: 3, text: "Szyfrowania" }],
                goodAnswer: 1
            },
            {
                id: 242,
                title: "W JavaScript zdarzenie 'onblur' zachodzi gdy:",
                answers: [{ id: 0, text: "Element odzyskuje fokus" }, { id: 1, text: "Element traci fokus" }, { id: 2, text: "Mysz najeżdża na element" }, { id: 3, text: "Strona się ładuje" }],
                goodAnswer: 1
            },
            {
                id: 243,
                title: "W SQL funkcja 'MAX()' służy do:",
                answers: [{ id: 0, text: "Zliczania rekordów" }, { id: 1, text: "Znalezienia największej wartości" }, { id: 2, text: "Sumowania" }, { id: 3, text: "Formatowania" }],
                goodAnswer: 1
            },
            {
                id: 244,
                title: "Który z poniższych kolorów w CSS to kolor czarny?",
                answers: [{ id: 0, text: "rgb(255,255,255)" }, { id: 1, text: "rgb(0,0,0)" }, { id: 2, text: "#FFF" }, { id: 3, text: "black-color" }],
                goodAnswer: 1
            },
            {
                id: 245,
                title: "W CSS 'overflow: hidden' powoduje:",
                answers: [{ id: 0, text: "Dodanie scrolla" }, { id: 1, text: "Ukrycie treści wystającej poza obszar elementu" }, { id: 2, text: "Ukrycie całego elementu" }, { id: 3, text: "Zwiększenie elementu" }],
                goodAnswer: 1
            },
            {
                id: 246,
                title: "W PHP instrukcja 'require' w odróżnieniu od 'include':",
                answers: [{ id: 0, text: "Nie zwraca błędów" }, { id: 1, text: "Zatrzymuje skrypt jeśli pliku nie ma" }, { id: 2, text: "Działa wolniej" }, { id: 3, text: "Służy tylko do obrazków" }],
                goodAnswer: 1
            },
            {
                id: 247,
                title: "W JS '1' == 1 zwróci:",
                answers: [{ id: 0, text: "false" }, { id: 1, text: "true" }, { id: 2, text: "null" }, { id: 3, text: "undefined" }],
                goodAnswer: 1
            },
            {
                id: 248,
                title: "W SQL 'INNER JOIN' zwraca wiersze:",
                answers: [{ id: 0, text: "Z lewej tabeli" }, { id: 1, text: "Dla których istnieje dopasowanie w obu tabelach" }, { id: 2, text: "Z obu tabel (wszystkie)" }, { id: 3, text: "Tylko z prawej tabeli" }],
                goodAnswer: 1
            },
            {
                id: 249,
                title: "W HTML5 znacznik <progress> służy do:",
                answers: [{ id: 0, text: "Wgrywania pliku" }, { id: 1, text: "Wyświetlenia paska postępu" }, { id: 2, text: "Tworzenia menu" }, { id: 3, text: "Odliczania czasu" }],
                goodAnswer: 1
            },
            {
                id: 250,
                title: "W CSS właściwość 'box-shadow' przyjmuje parametry w kolejności:",
                answers: [{ id: 0, text: "kolor, x, y" }, { id: 1, text: "x-offset, y-offset, rozmycie, kolor" }, { id: 2, text: "rozmycie, x, y" }, { id: 3, text: "x, kolor, y" }],
                goodAnswer: 1
            },
            {
                id: 251,
                title: "W PHP superglobalna tablica '$_ENV' zawiera:",
                answers: [{ id: 0, text: "Dane sesji" }, { id: 1, text: "Zmienne środowiskowe serwera" }, { id: 2, text: "Pliki użytkownika" }, { id: 3, text: "Błędy składni" }],
                goodAnswer: 1
            },
            {
                id: 252,
                title: "W JavaScript 'Array.isArray([1,2])' zwróci:",
                answers: [{ id: 0, text: "false" }, { id: 1, text: "true" }, { id: 2, text: "undefined" }, { id: 3, text: "object" }],
                goodAnswer: 1
            },
            {
                id: 253,
                title: "W SQL 'ORDER BY rand()' służy do:",
                answers: [{ id: 0, text: "Sortowania alfabetycznego" }, { id: 1, text: "Losowania rekordów" }, { id: 2, text: "Sortowania po ID" }, { id: 3, text: "Grupowania" }],
                goodAnswer: 1
            },
            {
                id: 254,
                title: "W HTML znacznik <strong> służy do:",
                answers: [{ id: 0, text: "Kursywy" }, { id: 1, text: "Ważnego tekstu (pogrubienie)" }, { id: 2, text: "Podkreślenia" }, { id: 3, text: "Zwiększenia czcionki" }],
                goodAnswer: 1
            },
            {
                id: 255,
                title: "W CSS selektor 'a:visited' dotyczy:",
                answers: [{ id: 0, text: "Najechanego linku" }, { id: 1, text: "Odwiedzonego linku" }, { id: 2, text: "Aktywnego linku" }, { id: 3, text: "Nowego linku" }],
                goodAnswer: 1
            },
            {
                id: 256,
                title: "W PHP funkcja 'htmlspecialchars()' służy do:",
                answers: [{ id: 0, text: "Tłumaczenia strony" }, { id: 1, text: "Konwersji znaków specjalnych na encje HTML" }, { id: 2, text: "Usuwania spacji" }, { id: 3, text: "Łączenia z bazą" }],
                goodAnswer: 1
            },
            {
                id: 257,
                title: "W JS operator '===' zwraca true jeśli:",
                answers: [{ id: 0, text: "Wartości są równe" }, { id: 1, text: "Wartości i typy są identyczne" }, { id: 2, text: "Wartości są różne" }, { id: 3, text: "Zmienne istnieją" }],
                goodAnswer: 1
            },
            {
                id: 258,
                title: "W SQL 'DROP TABLE IF EXISTS' chroni przed:",
                answers: [{ id: 0, text: "Wirusami" }, { id: 1, text: "Błędem w razie braku tabeli" }, { id: 2, text: "Usunięciem danych" }, { id: 3, text: "Duplikatami" }],
                goodAnswer: 1
            },
            {
                id: 259,
                title: "Który z atrybutów <form> określa sposób kodowania danych przy wysyłaniu pliku?",
                answers: [{ id: 0, text: "method" }, { id: 1, text: "enctype" }, { id: 2, text: "action" }, { id: 3, text: "type" }],
                goodAnswer: 1
            },
            {
                id: 260,
                title: "W CSS 'resize: both' pozwala użytkownikowi na:",
                answers: [{ id: 0, text: "Zmianę tła" }, { id: 1, text: "Zmianę rozmiaru elementu (np. textarea)" }, { id: 2, text: "Kopiowanie tekstu" }, { id: 3, text: "Przesuwanie elementu" }],
                goodAnswer: 1
            },
            {
                id: 261,
                title: "W PHP funkcja 'file_get_contents()' służy do:",
                answers: [{ id: 0, text: "Zapisania pliku" }, { id: 1, text: "Odczytania całego pliku do ciągu znaków" }, { id: 2, text: "Usunięcia pliku" }, { id: 3, text: "Zmiany nazwy" }],
                goodAnswer: 1
            },
            {
                id: 262,
                title: "W JS metoda 'toFixed(2)' dla liczby 5.678 zwróci:",
                answers: [{ id: 0, text: "5.67" }, { id: 1, text: "5.68" }, { id: 2, text: "5" }, { id: 3, text: "6" }],
                goodAnswer: 1
            },
            {
                id: 263,
                title: "W SQL polecenie 'INSERT INTO' wymaga słowa kluczowego:",
                answers: [{ id: 0, text: "SET" }, { id: 1, text: "VALUES" }, { id: 2, text: "WHERE" }, { id: 3, text: "FROM" }],
                goodAnswer: 1
            },
            {
                id: 264,
                title: "W HTML znacznik <thead> definiuje:",
                answers: [{ id: 0, text: "Głowę dokumentu" }, { id: 1, text: "Nagłówek tabeli" }, { id: 2, text: "Tytuł strony" }, { id: 3, text: "Pierwszy akapit" }],
                goodAnswer: 1
            },
            {
                id: 265,
                title: "W CSS 'transition-duration' określa:",
                answers: [{ id: 0, text: "Opóźnienie animacji" }, { id: 1, text: "Czas trwania przejścia" }, { id: 2, text: "Szybkość przewijania" }, { id: 3, text: "Ilość powtórzeń" }],
                goodAnswer: 1
            },
            {
                id: 266,
                title: "W PHP funkcja 'trim()' usuwa:",
                answers: [{ id: 0, text: "Tagi HTML" }, { id: 1, text: "Spacje z początku i końca ciągu" }, { id: 2, text: "Średniki" }, { id: 3, text: "Wszystkie liczby" }],
                goodAnswer: 1
            },
            {
                id: 267,
                title: "W JS 'window.history.back()' spowoduje:",
                answers: [{ id: 0, text: "Zamknięcie strony" }, { id: 1, text: "Powrót do poprzedniej strony w historii" }, { id: 2, text: "Odświeżenie" }, { id: 3, text: "Przejście do Google" }],
                goodAnswer: 1
            },
            {
                id: 268,
                title: "W SQL operator 'IS NULL' służy do:",
                answers: [{ id: 0, text: "Sprawdzania czy wartość wynosi 0" }, { id: 1, text: "Wyszukiwania pustych wartości" }, { id: 2, text: "Usuwania danych" }, { id: 3, text: "Ustawiania zera" }],
                goodAnswer: 1
            },
            {
                id: 269,
                title: "W HTML atrybut 'step' w <input type='number'> określa:",
                answers: [{ id: 0, text: "Maksymalną wartość" }, { id: 1, text: "Interwał zmiany wartości" }, { id: 2, text: "Długość pola" }, { id: 3, text: "Kolejność tabulacji" }],
                goodAnswer: 1
            },
            {
                id: 270,
                title: "W CSS 'font-size: 1.2rem' oznacza rozmiar:",
                answers: [{ id: 0, text: "12 pikseli" }, { id: 1, text: "120% rozmiaru elementu html" }, { id: 2, text: "120% rodzica" }, { id: 3, text: "Stały 1.2cm" }],
                goodAnswer: 1
            },
            {
                id: 271,
                title: "W PHP operator '@' przed funkcją służy do:",
                answers: [{ id: 0, text: "Przyśpieszenia działania" }, { id: 1, text: "Tłumienia komunikatów o błędach" }, { id: 2, text: "Wywołania statycznego" }, { id: 3, text: "Deklaracji globalnej" }],
                goodAnswer: 1
            },
            {
                id: 272,
                title: "W JS 'console.table()' służy do:",
                answers: [{ id: 0, text: "Rysowania tabeli HTML" }, { id: 1, text: "Wyświetlania danych w formie tabeli w konsoli" }, { id: 2, text: "Tworzenia bazy danych" }, { id: 3, text: "Sortowania tablicy" }],
                goodAnswer: 1
            },
            {
                id: 273,
                title: "W SQL 'GROUP_CONCAT()' w MySQL służy do:",
                answers: [{ id: 0, text: "Sumowania liczb" }, { id: 1, text: "Łączenia wartości z wielu wierszy w jeden string" }, { id: 2, text: "Grupowania tabel" }, { id: 3, text: "Łączenia kolumn" }],
                goodAnswer: 1
            },
            {
                id: 274,
                title: "W HTML5 znacznik <time> służy do:",
                answers: [{ id: 0, text: "Ustawienia timera" }, { id: 1, text: "Oznaczania daty i czasu w sposób czytelny dla maszyn" }, { id: 2, text: "Wyświetlenia zegara" }, { id: 3, text: "Mierzenia szybkości strony" }],
                goodAnswer: 1
            },
            {
                id: 275,
                title: "W CSS 'flex-grow: 1' sprawia, że:",
                answers: [{ id: 0, text: "Element się nie zmienia" }, { id: 1, text: "Element rośnie, by wypełnić wolną przestrzeń" }, { id: 2, text: "Element znika" }, { id: 3, text: "Element ma margines 1px" }],
                goodAnswer: 1
            },
            {
                id: 276,
                title: "W PHP funkcja 'md5()' generuje hash o długości:",
                answers: [{ id: 0, text: "16 znaków" }, { id: 1, text: "32 znaków" }, { id: 2, text: "40 znaków" }, { id: 3, text: "64 znaków" }],
                goodAnswer: 1
            },
            {
                id: 277,
                title: "W JavaScript 'event.target' odnosi się do:",
                answers: [{ id: 0, text: "Rodzica elementu" }, { id: 1, text: "Elementu, który wywołał zdarzenie" }, { id: 2, text: "Okna przeglądarki" }, { id: 3, text: "Skryptu" }],
                goodAnswer: 1
            },
            {
                id: 278,
                title: "W SQL polecenie 'USE nazwa_bazy' służy do:",
                answers: [{ id: 0, text: "Usunięcia bazy" }, { id: 1, text: "Wybrania bazy danych do pracy" }, { id: 2, text: "Utworzenia bazy" }, { id: 3, text: "Naprawy bazy" }],
                goodAnswer: 1
            },
            {
                id: 279,
                title: "Znacznik <option selected> w HTML spowoduje:",
                answers: [{ id: 0, text: "Zablokowanie wyboru" }, { id: 1, text: "Domyślne zaznaczenie opcji w liście" }, { id: 2, text: "Ukrycie opcji" }, { id: 3, text: "Usunięcie opcji" }],
                goodAnswer: 1
            },
            {
                id: 280,
                title: "W CSS 'border: 1px solid red' to:",
                answers: [{ id: 0, text: "Tło" }, { id: 1, text: "Obramowanie ciągłe czerwone" }, { id: 2, text: "Cień" }, { id: 3, text: "Margines wewnętrzny" }],
                goodAnswer: 1
            },
            {
                id: 281,
                title: "W PHP '$argv' to tablica zawierająca:",
                answers: [{ id: 0, text: "Zmienne sesji" }, { id: 1, text: "Argumenty przekazane do skryptu w linii komend" }, { id: 2, text: "Wersje PHP" }, { id: 3, text: "Dane POST" }],
                goodAnswer: 1
            },
            {
                id: 282,
                title: "W JS 'Array.from('abc')' stworzy tablicę:",
                answers: [{ id: 0, text: "['abc']" }, { id: 1, text: "['a', 'b', 'c']" }, { id: 2, text: "[97, 98, 99]" }, { id: 3, text: "[]" }],
                goodAnswer: 1
            },
            {
                id: 283,
                title: "W SQL 'SELECT * FROM tab LIMIT 2, 5' pominie:",
                answers: [{ id: 0, text: "5 rekordów" }, { id: 1, text: "2 rekordy" }, { id: 2, text: "Wszystkie rekordy" }, { id: 3, text: "Błędy" }],
                goodAnswer: 1
            },
            {
                id: 284,
                title: "Atrybut 'multiple' w <input type='file'> pozwala na:",
                answers: [{ id: 0, text: "Wysłanie pliku wiele razy" }, { id: 1, text: "Wybór wielu plików jednocześnie" }, { id: 2, text: "Zablokowanie wyboru" }, { id: 3, text: "Kompresję plików" }],
                goodAnswer: 1
            },
            {
                id: 285,
                title: "W CSS 'position: fixed' pozycjonuje względem:",
                answers: [{ id: 0, text: "Rodzica" }, { id: 1, text: "Okna przeglądarki (viewport)" }, { id: 2, text: "Góry dokumentu" }, { id: 3, text: "Innego elementu fixed" }],
                goodAnswer: 1
            },
            {
                id: 286,
                title: "W PHP funkcja 'array_keys()' zwraca:",
                answers: [{ id: 0, text: "Wszystkie wartości" }, { id: 1, text: "Wszystkie klucze tablicy" }, { id: 2, text: "Długość tablicy" }, { id: 3, text: "Sume tablicy" }],
                goodAnswer: 1
            },
            {
                id: 287,
                title: "W JavaScript 'JSON.stringify()' zamienia:",
                answers: [{ id: 0, text: "Tekst na obiekt" }, { id: 1, text: "Obiekt na ciąg znaków JSON" }, { id: 2, text: "Liczbę na tekst" }, { id: 3, text: "Błędy na null" }],
                goodAnswer: 1
            },
            {
                id: 288,
                title: "W SQL 'ADD CONSTRAINT' służy do:",
                answers: [{ id: 0, text: "Dodania rekordu" }, { id: 1, text: "Dodania ograniczeń (np. klucza obcego)" }, { id: 2, text: "Usuwania tabeli" }, { id: 3, text: "Grupowania" }],
                goodAnswer: 1
            },
            {
                id: 289,
                title: "Znacznik <datalist> w HTML5 służy do:",
                answers: [{ id: 0, text: "Tworzenia bazy danych" }, { id: 1, text: "Definiowania listy podpowiedzi dla pola input" }, { id: 2, text: "Listy numerowanej" }, { id: 3, text: "Przechowywania haseł" }],
                goodAnswer: 1
            },
            {
                id: 290,
                title: "W CSS właściwość 'opacity: 0' sprawia, że element:",
                answers: [{ id: 0, text: "Jest widoczny" }, { id: 1, text: "Jest całkowicie przezroczysty, ale zajmuje miejsce" }, { id: 2, text: "Jest usunięty z układu" }, { id: 3, text: "Zmienia kolor na biały" }],
                goodAnswer: 1
            },
            {
                id: 291,
                title: "W PHP pętla 'foreach($tab as $klucz => $wartosc)' pozwala na:",
                answers: [{ id: 0, text: "Dostęp tylko do wartości" }, { id: 1, text: "Dostęp do klucza i wartości elementu tablicy" }, { id: 2, text: "Nieskończoną pętlę" }, { id: 3, text: "Sortowanie tablicy" }],
                goodAnswer: 1
            },
            {
                id: 292,
                title: "W JS 'window.open()' służy do:",
                answers: [{ id: 0, text: "Otwarcia pliku" }, { id: 1, text: "Otwarcia nowego okna lub karty przeglądarki" }, { id: 2, text: "Uruchomienia programu" }, { id: 3, text: "Zamknięcia strony" }],
                goodAnswer: 1
            },
            {
                id: 293,
                title: "W SQL operator '<>' oznacza:",
                answers: [{ id: 0, text: "Równe" }, { id: 1, text: "Różne (nierówne)" }, { id: 2, text: "Mniejsze lub równe" }, { id: 3, text: "Przybliżone" }],
                goodAnswer: 1
            },
            {
                id: 294,
                title: "W HTML znacznik <sub> stworzy tekst:",
                answers: [{ id: 0, text: "W indeksie górnym" }, { id: 1, text: "W indeksie dolnym" }, { id: 2, text: "Podkreślony" }, { id: 3, text: "Mały" }],
                goodAnswer: 1
            },
            {
                id: 295,
                title: "W CSS 'word-spacing' zmienia odstępy między:",
                answers: [{ id: 0, text: "Literami" }, { id: 1, text: "Słowami" }, { id: 2, text: "Wierszami" }, { id: 3, text: "Akapitami" }],
                goodAnswer: 1
            },
            {
                id: 296,
                title: "W PHP funkcja 'session_name()' służy do:",
                answers: [{ id: 0, text: "Pobrania ID" }, { id: 1, text: "Pobrania lub ustawienia nazwy bieżącej sesji" }, { id: 2, text: "Usunięcia sesji" }, { id: 3, text: "Startu sesji" }],
                goodAnswer: 1
            },
            {
                id: 297,
                title: "W JavaScript 'null' jest typu:",
                answers: [{ id: 0, text: "undefined" }, { id: 1, text: "object" }, { id: 2, text: "null" }, { id: 3, text: "boolean" }],
                goodAnswer: 1
            },
            {
                id: 298,
                title: "W SQL 'SHOW TABLES' wyświetla:",
                answers: [{ id: 0, text: "Dane w tabeli" }, { id: 1, text: "Listę tabel w bieżącej bazie danych" }, { id: 2, text: "Listę baz danych" }, { id: 3, text: "Strukturę tabeli" }],
                goodAnswer: 1
            },
            {
                id: 299,
                title: "Który znacznik HTML służy do wstawiania obrazka?",
                answers: [{ id: 0, text: "<picture>" }, { id: 1, text: "<img>" }, { id: 2, text: "<image>" }, { id: 3, text: "<src>" }],
                goodAnswer: 1
            },
            {
                id: 300,
                title: "W CSS 'text-shadow' dodaje cień do:",
                answers: [{ id: 0, text: "Obrazka" }, { id: 1, text: "Tekstu" }, { id: 2, text: "Ramki" }, { id: 3, text: "Całej strony" }],
                goodAnswer: 1
            },
            {
                id: 301,
                title: "W PHP funkcja 'phpinfo()' wyświetla:",
                answers: [{ id: 0, text: "Błędy w kodzie" }, { id: 1, text: "Informacje o konfiguracji PHP" }, { id: 2, text: "Listę plików na serwerze" }, { id: 3, text: "Czas systemowy" }],
                goodAnswer: 1
            },
            {
                id: 302,
                title: "W JS 'history.length' zwraca:",
                answers: [{ id: 0, text: "Ilość sekund" }, { id: 1, text: "Liczbę stron w historii sesji" }, { id: 2, text: "Długość URL" }, { id: 3, text: "Ilość skryptów" }],
                goodAnswer: 1
            },
            {
                id: 303,
                title: "W SQL polecenie 'RENAME TABLE old TO new' służy do:",
                answers: [{ id: 0, text: "Kopiowania" }, { id: 1, text: "Zmiany nazwy tabeli" }, { id: 2, text: "Usuwania" }, { id: 3, text: "Naprawy" }],
                goodAnswer: 1
            },
            {
                id: 304,
                title: "Atrybut 'maxlength' w <input> określa:",
                answers: [{ id: 0, text: "Szerokość w pikselach" }, { id: 1, text: "Maksymalną liczbę znaków do wpisania" }, { id: 2, text: "Rozmiar pliku" }, { id: 3, text: "Wartość liczbową" }],
                goodAnswer: 1
            },
            {
                id: 305,
                title: "W CSS właściwość 'resize' w Firefox domyślnie działa na:",
                answers: [{ id: 0, text: "<div>" }, { id: 1, text: "<textarea>" }, { id: 2, text: "<img>" }, { id: 3, text: "<p>" }],
                goodAnswer: 1
            },
            {
                id: 306,
                title: "W PHP funkcja 'unset()' służy do:",
                answers: [{ id: 0, text: "Ustawienia zmiennej" }, { id: 1, text: "Niszczenia (usuwania) zmiennej" }, { id: 2, text: "Resetowania bazy" }, { id: 3, text: "Szyfrowania" }],
                goodAnswer: 1
            },
            {
                id: 307,
                title: "W JS metoda 'push()' zwraca:",
                answers: [{ id: 0, text: "Usunięty element" }, { id: 1, text: "Nową długość tablicy" }, { id: 2, text: "Dodany element" }, { id: 3, text: "Pusty string" }],
                goodAnswer: 1
            },
            {
                id: 308,
                title: "W SQL 'DESCRIBE nazwa_tabeli' wyświetla:",
                answers: [{ id: 0, text: "Wszystkie dane" }, { id: 1, text: "Strukturę kolumn tabeli" }, { id: 2, text: "Liczbę rekordów" }, { id: 3, text: "Uprawnienia" }],
                goodAnswer: 1
            },
            {
                id: 309,
                title: "W HTML znacznik <small> służy do:",
                answers: [{ id: 0, text: "Zmniejszenia czcionki" }, { id: 1, text: "Prezentacji tzw. drobnego druku (np. prawnego)" }, { id: 2, text: "Pisania wielkimi literami" }, { id: 3, text: "Ukrycia tekstu" }],
                goodAnswer: 1
            },
            {
                id: 310,
                title: "W CSS 'column-count' służy do:",
                answers: [{ id: 0, text: "Zliczania wierszy" }, { id: 1, text: "Podziału tekstu na kolumny" }, { id: 2, text: "Grupowania tabel" }, { id: 3, text: "Sumowania szerokości" }],
                goodAnswer: 1
            },
            {
                id: 311,
                title: "W PHP funkcja 'array_pop()' usuwa element:",
                answers: [{ id: 0, text: "Pierwszy" }, { id: 1, text: "Ostatni" }, { id: 2, text: "Losowy" }, { id: 3, text: "Wszystkie" }],
                goodAnswer: 1
            },
            {
                id: 312,
                title: "W JavaScript '!!' (podwójna negacja) konwertuje wartość na:",
                answers: [{ id: 0, text: "String" }, { id: 1, text: "Boolean" }, { id: 2, text: "Number" }, { id: 3, text: "Null" }],
                goodAnswer: 1
            },
            {
                id: 313,
                title: "W SQL klauzula 'ON DELETE CASCADE' oznacza:",
                answers: [{ id: 0, text: "Zablokowanie usuwania" }, { id: 1, text: "Automatyczne usunięcie rekordów powiązanych" }, { id: 2, text: "Błąd bazy danych" }, { id: 3, text: "Zapisanie kopii" }],
                goodAnswer: 1
            },
            {
                id: 314,
                title: "Atrybut 'download' w znaczniku <a> służy do:",
                answers: [{ id: 0, text: "Otwierania strony" }, { id: 1, text: "Wymuszenia pobierania pliku zamiast otwierania" }, { id: 2, text: "Liczenia kliknięć" }, { id: 3, text: "Szyfrowania połączenia" }],
                goodAnswer: 1
            },
            {
                id: 315,
                title: "W CSS 'cursor: wait' zmieni kursor w:",
                answers: [{ id: 0, text: "Rączkę" }, { id: 1, text: "Symbol ładowania (klepsydrę)" }, { id: 2, text: "Krzyżyk" }, { id: 3, text: "Strzałkę" }],
                goodAnswer: 1
            },
            {
                id: 316,
                title: "W PHP funkcja 'header_remove()' służy do:",
                answers: [{ id: 0, text: "Usunięcia nagłówka H1" }, { id: 1, text: "Usunięcia wcześniej ustawionych nagłówków HTTP" }, { id: 2, text: "Zmiany tła" }, { id: 3, text: "Resetu sesji" }],
                goodAnswer: 1
            },
            {
                id: 317,
                title: "W JS 'Math.pow(2, 3)' zwróci:",
                answers: [{ id: 0, text: "6" }, { id: 1, text: "8" }, { id: 2, text: "9" }, { id: 3, text: "5" }],
                goodAnswer: 1
            },
            {
                id: 318,
                title: "W SQL 'SELECT COUNT(*)' zlicza:",
                answers: [{ id: 0, text: "Sume wartości" }, { id: 1, text: "Wszystkie wiersze (włącznie z NULL)" }, { id: 2, text: "Tylko unikalne wartości" }, { id: 3, text: "Tylko liczby" }],
                goodAnswer: 1
            },
            {
                id: 319,
                title: "W HTML znacznik <caption> służy do:",
                answers: [{ id: 0, text: "Nagłówka strony" }, { id: 1, text: "Podpisu tabeli" }, { id: 2, text: "Tworzenia linku" }, { id: 3, text: "Stylizacji obrazka" }],
                goodAnswer: 1
            },
            {
                id: 320,
                title: "W CSS 'user-select: none' powoduje:",
                answers: [{ id: 0, text: "Brak możliwości wpisywania" }, { id: 1, text: "Zablokowanie możliwości zaznaczania tekstu" }, { id: 2, text: "Ukrycie kursora" }, { id: 3, text: "Dezaktywację linków" }],
                goodAnswer: 1
            },
            {
                id: 321,
                title: "W PHP funkcja 'number_format()' służy do:",
                answers: [{ id: 0, text: "Losowania liczby" }, { id: 1, text: "Formatowania wyświetlania liczb (np. separatory)" }, { id: 2, text: "Konwersji na tekst" }, { id: 3, text: "Obliczania potęgi" }],
                goodAnswer: 1
            },
            {
                id: 322,
                title: "W JS 'document.title' pozwala na:",
                answers: [{ id: 0, text: "Zmianę treści body" }, { id: 1, text: "Pobranie lub zmianę tytułu strony w przeglądarce" }, { id: 2, text: "Dodanie nagłówka H1" }, { id: 3, text: "Usunięcie stylów" }],
                goodAnswer: 1
            },
            {
                id: 323,
                title: "W SQL 'UPDATE ... SET ...' służy do:",
                answers: [{ id: 0, text: "Dodania tabeli" }, { id: 1, text: "Modyfikacji danych w rekordach" }, { id: 2, text: "Usunięcia bazy" }, { id: 3, text: "Sortowania" }],
                goodAnswer: 1
            },
            {
                id: 324,
                title: "Znacznik <wbr> w HTML sugeruje:",
                answers: [{ id: 0, text: "Pogrubienie" }, { id: 1, text: "Miejsce, w którym można przełamać linię tekstu" }, { id: 2, text: "Nowy akapit" }, { id: 3, text: "Koniec sekcji" }],
                goodAnswer: 1
            },
            {
                id: 325,
                title: "W CSS właściwość 'filter: grayscale(100%)' zrobi obrazek:",
                answers: [{ id: 0, text: "Niebieskim" }, { id: 1, text: "Czarno-białym" }, { id: 2, text: "Przezroczystym" }, { id: 3, text: "Odwróconym" }],
                goodAnswer: 1
            },
            {
                id: 326,
                title: "W PHP funkcja 'shuffle()' służy do:",
                answers: [{ id: 0, text: "Łączenia tablic" }, { id: 1, text: "Losowego mieszania elementów tablicy" }, { id: 2, text: "Usuwania duplikatów" }, { id: 3, text: "Sortowania rosnąco" }],
                goodAnswer: 1
            },
            {
                id: 327,
                title: "W JS zdarzenie 'onchange' jest najczęściej używane z:",
                answers: [{ id: 0, text: "<a>" }, { id: 1, text: "<select>, <input>, <textarea>" }, { id: 2, text: "<body>" }, { id: 3, text: "<div>" }],
                goodAnswer: 1
            },
            {
                id: 328,
                title: "W SQL 'PRIMARY KEY' automatycznie nakłada ograniczenie:",
                answers: [{ id: 0, text: "NULL" }, { id: 1, text: "UNIQUE i NOT NULL" }, { id: 2, text: "FOREIGN KEY" }, { id: 3, text: "CHECK" }],
                goodAnswer: 1
            },
            {
                id: 329,
                title: "Atrybut 'autoplay' w <video> spowoduje:",
                answers: [{ id: 0, text: "Pobranie filmu" }, { id: 1, text: "Samoczynne odtworzenie po załadowaniu" }, { id: 2, text: "Wyłączenie dźwięku" }, { id: 3, text: "Odtwarzanie od końca" }],
                goodAnswer: 1
            },
            {
                id: 330,
                title: "W CSS 'overflow-y: scroll' wymusza pasek przewijania:",
                answers: [{ id: 0, text: "Poziomy" }, { id: 1, text: "Pionowy" }, { id: 2, text: "Oba" }, { id: 3, text: "Żaden" }],
                goodAnswer: 1
            },
            {
                id: 331,
                title: "W PHP funkcja 'gettype()' zwraca:",
                answers: [{ id: 0, text: "Rozmiar pliku" }, { id: 1, text: "Nazwę typu danych zmiennej" }, { id: 2, text: "Wartość zmiennej" }, { id: 3, text: "Kod błędu" }],
                goodAnswer: 1
            },
            {
                id: 332,
                title: "W JS metoda 'sort()' domyślnie sortuje elementy jako:",
                answers: [{ id: 0, text: "Liczby" }, { id: 1, text: "Ciągi znaków (alfabetycznie)" }, { id: 2, text: "Daty" }, { id: 3, text: "Obiekty" }],
                goodAnswer: 1
            },
            {
                id: 333,
                title: "W SQL 'DEFAULT' w definicji kolumny ustawia:",
                answers: [{ id: 0, text: "Klucz główny" }, { id: 1, text: "Domyślną wartość dla kolumny" }, { id: 2, text: "Typ danych" }, { id: 3, text: "Maksymalną długość" }],
                goodAnswer: 1
            },
            {
                id: 334,
                title: "W HTML znacznik <cite> służy do:",
                answers: [{ id: 0, text: "Kodowania" }, { id: 1, text: "Oznaczania tytułu dzieła (np. książki)" }, { id: 2, text: "Podkreślania" }, { id: 3, text: "Tworzenia list" }],
                goodAnswer: 1
            },
            {
                id: 335,
                title: "W CSS 'box-sizing: content-box' (domyślnie) sprawia, że szerokość:",
                answers: [{ id: 0, text: "Zawiera padding" }, { id: 1, text: "Dotyczy tylko samej zawartości (bez paddingu i border)" }, { id: 2, text: "Zależy od marginesu" }, { id: 3, text: "Jest zawsze 100%" }],
                goodAnswer: 1
            },
            {
                id: 336,
                title: "W PHP funkcja 'array_sum()' oblicza:",
                answers: [{ id: 0, text: "Ilość elementów" }, { id: 1, text: "Sumę wartości w tablicy" }, { id: 2, text: "Średnią" }, { id: 3, text: "Największą wartość" }],
                goodAnswer: 1
            },
            {
                id: 337,
                title: "W JS 'location.reload()' służy do:",
                answers: [{ id: 0, text: "Zamknięcia karty" }, { id: 1, text: "Odświeżenia bieżącej strony" }, { id: 2, text: "Przejścia wstecz" }, { id: 3, text: "Czyszczenia konsoli" }],
                goodAnswer: 1
            },
            {
                id: 338,
                title: "W SQL 'DATABASE()' zwraca nazwę:",
                answers: [{ id: 0, text: "Wszystkich baz" }, { id: 1, text: "Aktualnie wybranej bazy danych" }, { id: 2, text: "Serwera" }, { id: 3, text: "Użytkownika" }],
                goodAnswer: 1
            },
            {
                id: 339,
                title: "Atrybut 'required' w <input> sprawia, że:",
                answers: [{ id: 0, text: "Pole jest ukryte" }, { id: 1, text: "Pole musi zostać wypełnione przed wysłaniem" }, { id: 2, text: "Pole jest tylko do odczytu" }, { id: 3, text: "Pole jest zablokowane" }],
                goodAnswer: 1
            },
            {
                id: 340,
                title: "W CSS 'text-indent' ustawia:",
                answers: [{ id: 0, text: "Margines zewnętrzny" }, { id: 1, text: "Wcięcie pierwszego wiersza tekstu" }, { id: 2, text: "Odstępy między literami" }, { id: 3, text: "Pogrubienie" }],
                goodAnswer: 1
            },
            {
                id: 341,
                title: "W PHP pętla 'do...while' gwarantuje:",
                answers: [{ id: 0, text: "Szybkość" }, { id: 1, text: "Przynajmniej jedno wykonanie kodu" }, { id: 2, text: "Brak błędów" }, { id: 3, text: "Działanie na tablicach" }],
                goodAnswer: 1
            },
            {
                id: 342,
                title: "W JS 'Math.sqrt(16)' zwróci:",
                answers: [{ id: 0, text: "4" }, { id: 1, text: "8" }, { id: 2, text: "256" }, { id: 3, text: "2" }],
                goodAnswer: 0
            },
            {
                id: 343,
                title: "W SQL 'UNIQUE' zapewnia, że:",
                answers: [{ id: 0, text: "Wartości w kolumnie są niepowtarzalne" }, { id: 1, text: "Kolumna nie jest pusta" }, { id: 2, text: "Kolumna jest kluczem obcym" }, { id: 3, text: "Wartość jest liczbą" }],
                goodAnswer: 0
            },
            {
                id: 344,
                title: "W HTML5 znacznik <aside> reprezentuje:",
                answers: [{ id: 0, text: "Główną treść" }, { id: 1, text: "Treść poboczną (np. pasek boczny)" }, { id: 2, text: "Stopkę" }, { id: 3, text: "Nagłówek" }],
                goodAnswer: 1
            },
            {
                id: 345,
                title: "W CSS 'display: grid' służy do tworzenia:",
                answers: [{ id: 0, text: "Listy" }, { id: 1, text: "Układu siatkowego (dwuwymiarowego)" }, { id: 2, text: "Animacji" }, { id: 3, text: "Cienia" }],
                goodAnswer: 1
            },
            {
                id: 346,
                title: "W PHP funkcja 'round(3.5)' zwróci:",
                answers: [{ id: 0, text: "3" }, { id: 1, text: "4" }, { id: 2, text: "3.5" }, { id: 3, text: "0" }],
                goodAnswer: 1
            },
            {
                id: 347,
                title: "W JS 'isNaN('hello')' zwróci:",
                answers: [{ id: 0, text: "false" }, { id: 1, text: "true" }, { id: 2, text: "undefined" }, { id: 3, text: "error" }],
                goodAnswer: 1
            },
            {
                id: 348,
                title: "W SQL 'ALTER TABLE ... DROP COLUMN ...' służy do:",
                answers: [{ id: 0, text: "Dodania kolumny" }, { id: 1, text: "Usunięcia kolumny" }, { id: 2, text: "Zmiany typu" }, { id: 3, text: "Usunięcia bazy" }],
                goodAnswer: 1
            },
            {
                id: 349,
                title: "Który znacznik HTML służy do wstawienia rozwijanej listy?",
                answers: [{ id: 0, text: "<input type='list'>" }, { id: 1, text: "<select>" }, { id: 2, text: "<dropdown>" }, { id: 3, text: "<optgroup>" }],
                goodAnswer: 1
            },
            {
                id: 350,
                title: "W CSS 'vertical-align: middle' działa głównie wewnątrz:",
                answers: [{ id: 0, text: "<div>" }, { id: 1, text: "Komórek tabeli (<td>)" }, { id: 2, text: "Akapitów <p>" }, { id: 3, text: "Sekcji <section>" }],
                goodAnswer: 1
            },
            {
                id: 351,
                title: "W PHP operator '->' służy do:",
                answers: [{ id: 0, text: "Łączenia stringów" }, { id: 1, text: "Dostępu do właściwości lub metod obiektu" }, { id: 2, text: "Porównania" }, { id: 3, text: "Przypisania w tablicy" }],
                goodAnswer: 1
            },
            {
                id: 352,
                title: "W JS 'window.alert()' to skrócona forma:",
                answers: [{ id: 0, text: "alert()" }, { id: 1, text: "msg()" }, { id: 2, text: "console.log()" }, { id: 3, text: "print()" }],
                goodAnswer: 0
            },
            {
                id: 353,
                title: "W SQL 'NOT BETWEEN 1 AND 10' wybierze wartości:",
                answers: [{ id: 0, text: "Z zakresu 1-10" }, { id: 1, text: "Spoza zakresu 1-10" }, { id: 2, text: "Tylko 1 i 10" }, { id: 3, text: "Ujemne" }],
                goodAnswer: 1
            },
            {
                id: 354,
                title: "Atrybut 'href' w <link> służy do:",
                answers: [{ id: 0, text: "Wyświetlenia tekstu" }, { id: 1, text: "Wskazania ścieżki do arkusza stylów" }, { id: 2, text: "Połączenia z JS" }, { id: 3, text: "Definicji meta" }],
                goodAnswer: 1
            },
            {
                id: 355,
                title: "W CSS właściwość 'font-variant: small-caps' powoduje:",
                answers: [{ id: 0, text: "Małe litery" }, { id: 1, text: "Zamianę małych liter na małe wersje wielkich liter" }, { id: 2, text: "Pogrubienie" }, { id: 3, text: "Pochylenie" }],
                goodAnswer: 1
            },
            {
                id: 356,
                title: "W PHP funkcja 'count($_POST)' zwróci:",
                answers: [{ id: 0, text: "Liczbę rekordów w bazie" }, { id: 1, text: "Liczbę pól przesłanych w formularzu metodą POST" }, { id: 2, text: "Długość adresu URL" }, { id: 3, text: "Zawsze 0" }],
                goodAnswer: 1
            },
            {
                id: 357,
                title: "W JS 'confirm()' zwraca typ:",
                answers: [{ id: 0, text: "String" }, { id: 1, text: "Boolean (true/false)" }, { id: 2, text: "Number" }, { id: 3, text: "Object" }],
                goodAnswer: 1
            },
            {
                id: 358,
                title: "W SQL 'EXPLAIN' przed zapytaniem służy do:",
                answers: [{ id: 0, text: "Uruchomienia pomocy" }, { id: 1, text: "Analizy planu wykonania zapytania" }, { id: 2, text: "Naprawy tabeli" }, { id: 3, text: "Szyfrowania" }],
                goodAnswer: 1
            },
            {
                id: 359,
                title: "Atrybut 'alt' w HTML jest wymagany dla:",
                answers: [{ id: 0, text: "<a>" }, { id: 1, text: "<img>" }, { id: 2, text: "<div>" }, { id: 3, text: "<script>" }],
                goodAnswer: 1
            },
            {
                id: 360,
                title: "W CSS 'border-collapse: collapse' stosuje się w:",
                answers: [{ id: 0, text: "Listach" }, { id: 1, text: "Tabelach (łączenie krawędzi)" }, { id: 2, text: "Obrazkach" }, { id: 3, text: "Formularzach" }],
                goodAnswer: 1
            },
            {
                id: 361,
                title: "W PHP 'self::' służy do odwołania do:",
                answers: [{ id: 0, text: "Zmiennej globalnej" }, { id: 1, text: "Statycznej właściwości lub metody w tej samej klasie" }, { id: 2, text: "Rodzica" }, { id: 3, text: "Bazy danych" }],
                goodAnswer: 1
            },
            {
                id: 362,
                title: "W JS 'document.getElementsByTagName('p')' zwraca:",
                answers: [{ id: 0, text: "Jeden element" }, { id: 1, text: "Kolekcję (tablicę) wszystkich elementów <p>" }, { id: 2, text: "Tylko pierwszy <p>" }, { id: 3, text: "Tekst wewnątrz <p>" }],
                goodAnswer: 1
            },
            {
                id: 363,
                title: "W SQL 'CURRENT_DATE' zwraca:",
                answers: [{ id: 0, text: "Czas serwera" }, { id: 1, text: "Bieżącą datę" }, { id: 2, text: "Rok" }, { id: 3, text: "Poprzednią datę" }],
                goodAnswer: 1
            },
            {
                id: 364,
                title: "W HTML znacznik <address> służy do:",
                answers: [{ id: 0, text: "Wpisania adresu IP" }, { id: 1, text: "Danych kontaktowych autora/właściciela" }, { id: 2, text: "Lokalizacji serwera" }, { id: 3, text: "Mapy strony" }],
                goodAnswer: 1
            },
            {
                id: 365,
                title: "W CSS 'cursor: move' wskazuje na możliwość:",
                answers: [{ id: 0, text: "Kliknięcia" }, { id: 1, text: "Przesunięcia elementu" }, { id: 2, text: "Edycji" }, { id: 3, text: "Usunięcia" }],
                goodAnswer: 1
            },
            {
                id: 366,
                title: "W PHP funkcja 'file()' wczytuje plik do:",
                answers: [{ id: 0, text: "Zmiennej tekstowej" }, { id: 1, text: "Tablicy (każdy wiersz to element)" }, { id: 2, text: "Bazy danych" }, { id: 3, text: "Pliku tymczasowego" }],
                goodAnswer: 1
            },
            {
                id: 367,
                title: "W JS 'typeof undefined' zwróci:",
                answers: [{ id: 0, text: "null" }, { id: 1, text: "undefined" }, { id: 2, text: "object" }, { id: 3, text: "string" }],
                goodAnswer: 1
            },
            {
                id: 368,
                title: "W SQL 'INNER JOIN' to samo co:",
                answers: [{ id: 0, text: "LEFT JOIN" }, { id: 1, text: "JOIN" }, { id: 2, text: "RIGHT JOIN" }, { id: 3, text: "UNION" }],
                goodAnswer: 1
            },
            {
                id: 369,
                title: "Atrybut 'value' w <input type='submit'> określa:",
                answers: [{ id: 0, text: "Nazwę pola" }, { id: 1, text: "Napis na przycisku" }, { id: 2, text: "Adres wysyłki" }, { id: 3, text: "Metodę kodowania" }],
                goodAnswer: 1
            },
            {
                id: 370,
                title: "W CSS właściwość 'float' nie działa na elementach z:",
                answers: [{ id: 0, text: "position: absolute" }, { id: 1, text: "position: static" }, { id: 2, text: "display: block" }, { id: 3, text: "color: red" }],
                goodAnswer: 0
            },
            {
                id: 371,
                title: "W PHP '$_SERVER['PHP_SELF']' zwraca:",
                answers: [{ id: 0, text: "Nazwę serwera" }, { id: 1, text: "Nazwę pliku bieżącego skryptu" }, { id: 2, text: "Wersję PHP" }, { id: 3, text: "Adres IP klienta" }],
                goodAnswer: 1
            },
            {
                id: 372,
                title: "W JS pętla 'while(true)' bez break to pętla:",
                answers: [{ id: 0, text: "Bezpieczna" }, { id: 1, text: "Nieskończona" }, { id: 2, text: "Zagnieżdżona" }, { id: 3, text: "Pusta" }],
                goodAnswer: 1
            },
            {
                id: 373,
                title: "W SQL operator 'IN' jest skrótem dla wielu:",
                answers: [{ id: 0, text: "AND" }, { id: 1, text: "OR" }, { id: 2, text: "NOT" }, { id: 3, text: "JOIN" }],
                goodAnswer: 1
            },
            {
                id: 374,
                title: "W HTML znacznik <legend> występuje tylko wewnątrz:",
                answers: [{ id: 0, text: "<table>" }, { id: 1, text: "<fieldset>" }, { id: 2, text: "<form>" }, { id: 3, text: "<ul>" }],
                goodAnswer: 1
            },
            {
                id: 375,
                title: "W CSS 'column-gap' określa odstęp między:",
                answers: [{ id: 0, text: "Wierszami" }, { id: 1, text: "Kolumnami tekstu" }, { id: 2, text: "Literami" }, { id: 3, text: "Obrazkami" }],
                goodAnswer: 1
            },
            {
                id: 376,
                title: "W PHP funkcja 'header('Content-Type: application/pdf')' służy do:",
                answers: [{ id: 0, text: "Pobrania pliku" }, { id: 1, text: "Poinformowania przeglądarki, że wysyłany jest plik PDF" }, { id: 2, text: "Konwersji HTML do PDF" }, { id: 3, text: "Hasłowania PDF" }],
                goodAnswer: 1
            },
            {
                id: 377,
                title: "W JS 'document.body.innerHTML = ''' wyczyści:",
                answers: [{ id: 0, text: "Konsolę" }, { id: 1, text: "Całą zawartość widoczną na stronie" }, { id: 2, text: "Tylko skrypty" }, { id: 3, text: "Ciasteczka" }],
                goodAnswer: 1
            },
            {
                id: 378,
                title: "W SQL 'NOT NULL' przy tworzeniu tabeli to:",
                answers: [{ id: 0, text: "Typ danych" }, { id: 1, text: "Wymuszenie, aby kolumna nie była pusta" }, { id: 2, text: "Nazwa kolumny" }, { id: 3, text: "Komentarz" }],
                goodAnswer: 1
            },
            {
                id: 379,
                title: "Który znacznik HTML służy do wstawiania kodu źródłowego?",
                answers: [{ id: 0, text: "<source>" }, { id: 1, text: "<code>" }, { id: 2, text: "<script>" }, { id: 3, text: "<pre>" }],
                goodAnswer: 1
            },
            {
                id: 380,
                title: "W CSS 'text-transform: capitalize' zmieni:",
                answers: [{ id: 0, text: "Wszystko na wielkie litery" }, { id: 1, text: "Pierwszą literę każdego słowa na wielką" }, { id: 2, text: "Wszystko na małe litery" }, { id: 3, text: "Tylko pierwszą literę zdania" }],
                goodAnswer: 1
            },
            {
                id: 381,
                title: "W PHP funkcja 'empty($var)' zwróci true dla:",
                answers: [{ id: 0, text: "1" }, { id: 1, text: "0, null lub pustego stringa" }, { id: 2, text: "dowolnego obiektu" }, { id: 3, text: "zawsze false" }],
                goodAnswer: 1
            },
            {
                id: 382,
                title: "W JS 'const tab = [1,2]; tab.push(3);' spowoduje:",
                answers: [{ id: 0, text: "Błąd ponieważ tab to stała" }, { id: 1, text: "Dodanie 3 do tablicy" }, { id: 2, text: "Usunięcie tablicy" }, { id: 3, text: "Nic" }],
                goodAnswer: 1
            },
            {
                id: 383,
                title: "W SQL 'SELECT DISTINCT' usuwa z wyników:",
                answers: [{ id: 0, text: "Wszystkie wiersze" }, { id: 1, text: "Duplikaty" }, { id: 2, text: "Wartości NULL" }, { id: 3, text: "Błędy" }],
                goodAnswer: 1
            },
            {
                id: 384,
                title: "W HTML5 znacznik <track> służy do:",
                answers: [{ id: 0, text: "Śledzenia użytkownika" }, { id: 1, text: "Dodawania napisów do <video>" }, { id: 2, text: "Odtwarzania muzyki" }, { id: 3, text: "Pomiaru prędkości" }],
                goodAnswer: 1
            },
            {
                id: 385,
                title: "W CSS właściwość 'list-style-position: inside' umieszcza punktory:",
                answers: [{ id: 0, text: "Na zewnątrz tekstu" }, { id: 1, text: "Wewnątrz obszaru treści elementu listy" }, { id: 2, text: "Na górze" }, { id: 3, text: "Z prawej strony" }],
                goodAnswer: 1
            },
            {
                id: 386,
                title: "W PHP '->' to operator:",
                answers: [{ id: 0, text: "Porównania" }, { id: 1, text: "Obiektowy (wywołanie metody/właściwości)" }, { id: 2, text: "Bitowy" }, { id: 3, text: "Logiczny" }],
                goodAnswer: 1
            },
            {
                id: 387,
                title: "W JS 'prompt()' zawsze zwraca:",
                answers: [{ id: 0, text: "Number" }, { id: 1, text: "String lub null" }, { id: 2, text: "Boolean" }, { id: 3, text: "Undefined" }],
                goodAnswer: 1
            },
            {
                id: 388,
                title: "W SQL 'TRUNCATE' jest szybszy niż 'DELETE' ponieważ:",
                answers: [{ id: 0, text: "Nie zapisuje logów dla każdego wiersza" }, { id: 1, text: "Usuwa bazę" }, { id: 2, text: "Jest nowszy" }, { id: 3, text: "Działa tylko na liczbach" }],
                goodAnswer: 0
            },
            {
                id: 389,
                title: "Atrybut 'size' w <select> określa:",
                answers: [{ id: 0, text: "Szerokość" }, { id: 1, text: "Liczbę widocznych jednocześnie opcji" }, { id: 2, text: "Maksymalną liczbę opcji" }, { id: 3, text: "Wielkość czcionki" }],
                goodAnswer: 1
            },
            {
                id: 390,
                title: "W CSS właściwość 'resize' wymaga również ustawienia:",
                answers: [{ id: 0, text: "color" }, { id: 1, text: "overflow (innego niż visible)" }, { id: 2, text: "margin" }, { id: 3, text: "z-index" }],
                goodAnswer: 1
            },
            {
                id: 391,
                title: "W PHP funkcja 'mysqli_close()' służy do:",
                answers: [{ id: 0, text: "Zamknięcia sesji" }, { id: 1, text: "Zamknięcia połączenia z bazą danych" }, { id: 2, text: "Zamknięcia pliku" }, { id: 3, text: "Ukrycia błędów" }],
                goodAnswer: 1
            },
            {
                id: 392,
                title: "W JS 'Math.min(5, 10, 2)' zwróci:",
                answers: [{ id: 0, text: "5" }, { id: 1, text: "2" }, { id: 2, text: "10" }, { id: 3, text: "NaN" }],
                goodAnswer: 1
            },
            {
                id: 393,
                title: "W SQL 'BACKUP DATABASE' służy do:",
                answers: [{ id: 0, text: "Usuwania" }, { id: 1, text: "Tworzenia kopii zapasowej" }, { id: 2, text: "Naprawy" }, { id: 3, text: "Grupowania" }],
                goodAnswer: 1
            },
            {
                id: 394,
                title: "Znacznik <i> w HTML5 służy do:",
                answers: [{ id: 0, text: "Pogrubienia" }, { id: 1, text: "Tekstu alternatywnego (np. technicznego lub myśli)" }, { id: 2, text: "Definicji" }, { id: 3, text: "Wstawienia ikony" }],
                goodAnswer: 1
            },
            {
                id: 395,
                title: "W CSS 'white-space: pre' zachowuje:",
                answers: [{ id: 0, text: "Kolory" }, { id: 1, text: "Spacje i znaki nowej linii" }, { id: 2, text: "Marginesy" }, { id: 3, text: "Tylko tekst" }],
                goodAnswer: 1
            },
            {
                id: 396,
                title: "W PHP funkcja 'array_reverse()' służy do:",
                answers: [{ id: 0, text: "Sortowania" }, { id: 1, text: "Odwrócenia kolejności elementów w tablicy" }, { id: 2, text: "Łączenia" }, { id: 3, text: "Usuwania" }],
                goodAnswer: 1
            },
            {
                id: 397,
                title: "W JS 'new Date()' bez parametrów zwraca:",
                answers: [{ id: 0, text: "Rok" }, { id: 1, text: "Aktualną datę i godzinę systemową" }, { id: 2, text: "0" }, { id: 3, text: "Błąd" }],
                goodAnswer: 1
            },
            {
                id: 398,
                title: "W SQL 'ORDER BY 1' oznacza sortowanie według:",
                answers: [{ id: 0, text: "Liczby 1" }, { id: 1, text: "Pierwszej kolumny w zapytaniu SELECT" }, { id: 2, text: "ID" }, { id: 3, text: "Alfabetycznie" }],
                goodAnswer: 1
            },
            {
                id: 399,
                title: "Atrybut 'accept' w <input type='file'> służy do:",
                answers: [{ id: 0, text: "Akceptacji regulaminu" }, { id: 1, text: "Filtrowania dopuszczalnych typów plików" }, { id: 2, text: "Zwiększenia szybkości" }, { id: 3, text: "Szyfrowania" }],
                goodAnswer: 1
            },
            {
                id: 400,
                title: "W programie GIMP skrót 'Ctrl+Z' służy do:",
                answers: [{ id: 0, text: "Zapisu" }, { id: 1, text: "Cofnięcia ostatniej operacji" }, { id: 2, text: "Zamknięcia" }, { id: 3, text: "Pędzla" }],
                goodAnswer: 1
            }
        ],
        available: true
    },
    {
        name: "INF.04",
        fullName: "Projektowanie, programowanie i testowanie aplikacji",
        questions: [
            {
                id: 0,
                title: "Ile psów?",
                answers: {
                    0: "1",
                    1: "3",
                    2: "2",
                    3: "5",
                },
                goodAnswer: 0
            }
        ],
        available: false
    }
]

export default data