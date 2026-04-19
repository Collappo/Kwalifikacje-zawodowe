const data = [
    {
        name: "INF.03",
        fullName: "Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych",
        questions: [
            {
                id: 0,
                title: "Który z atrybutów znacznika <img> w HTML odpowiada za tekst alternatywny?",
                answers: [
                    { id: 0, text: "title" },
                    { id: 1, text: "alt" },
                    { id: 2, text: "src" },
                    { id: 3, text: "longdesc" }
                ],
                goodAnswer: 1
            },
            {
                id: 1,
                title: "W języku PHP, aby połączyć się z bazą danych MySQL, należy użyć funkcji:",
                answers: [
                    { id: 0, text: "mysqli_connect()" },
                    { id: 1, text: "mysql_open()" },
                    { id: 2, text: "db_connect()" },
                    { id: 3, text: "connect_mysql()" }
                ],
                goodAnswer: 0
            },
            {
                id: 2,
                title: "Która właściwość CSS służy do zmiany koloru tła elementu?",
                answers: [
                    { id: 0, text: "color" },
                    { id: 1, text: "bgcolor" },
                    { id: 2, text: "background-color" },
                    { id: 3, text: "back-color" }
                ],
                goodAnswer: 2
            },
            {
                id: 3,
                title: "W języku SQL polecenie służące do usuwania danych z tabeli to:",
                answers: [
                    { id: 0, text: "REMOVE" },
                    { id: 1, text: "DROP" },
                    { id: 2, text: "DELETE" },
                    { id: 3, text: "TRUNCATE" }
                ],
                goodAnswer: 2
            },
            {
                id: 4,
                title: "Który symbol w języku JavaScript oznacza operator logiczny 'I' (AND)?",
                answers: [
                    { id: 0, text: "||" },
                    { id: 1, text: "&&" },
                    { id: 2, text: "!" },
                    { id: 3, text: "&" }
                ],
                goodAnswer: 1
            },
            {
                id: 5,
                title: "Jaki jest domyślny port dla protokołu HTTP?",
                answers: [
                    { id: 0, text: "21" },
                    { id: 1, text: "443" },
                    { id: 2, text: "80" },
                    { id: 3, text: "110" }
                ],
                goodAnswer: 2
            },
            {
                id: 6,
                title: "Który znacznik HTML służy do utworzenia listy numerowanej?",
                answers: [
                    { id: 0, text: "<ul>" },
                    { id: 1, text: "<li>" },
                    { id: 2, text: "<ol>" },
                    { id: 3, text: "<list>" }
                ],
                goodAnswer: 2
            },
            {
                id: 7,
                title: "Jakie rozszerzenie ma plik kaskadowych arkuszy stylów?",
                answers: [
                    { id: 0, text: ".css" },
                    { id: 1, text: ".cas" },
                    { id: 2, text: ".style" },
                    { id: 3, text: ".html" }
                ],
                goodAnswer: 0
            },
            {
                id: 8,
                title: "W SQL klauzula ORDER BY służy do:",
                answers: [
                    { id: 0, text: "Grupowania wyników" },
                    { id: 1, text: "Sortowania wyników" },
                    { id: 2, text: "Łączenia tabel" },
                    { id: 3, text: "Filtrowania wyników" }
                ],
                goodAnswer: 1
            },
            {
                id: 9,
                title: "Która z metod obiektu XMLHttpRequest wysyła żądanie do serwera?",
                answers: [
                    { id: 0, text: "open()" },
                    { id: 1, text: "get()" },
                    { id: 2, text: "send()" },
                    { id: 3, text: "post()" }
                ],
                goodAnswer: 2
            },
            {
                id: 10,
                title: "W CSS, aby tekst był pogrubiony, należy użyć właściwości font-weight z wartością:",
                answers: [
                    { id: 0, text: "italic" },
                    { id: 1, text: "bold" },
                    { id: 2, text: "underline" },
                    { id: 3, text: "heavy" }
                ],
                goodAnswer: 1
            },
            {
                id: 11,
                title: "Zmienne w języku PHP zaczynają się od znaku:",
                answers: [
                    { id: 0, text: "#" },
                    { id: 1, text: "&" },
                    { id: 2, text: "$" },
                    { id: 3, text: "@" }
                ],
                goodAnswer: 2
            },
            {
                id: 12,
                title: "Który z formatów plików graficznych obsługuje przezroczystość?",
                answers: [
                    { id: 0, text: "JPG" },
                    { id: 1, text: "BMP" },
                    { id: 2, text: "PNG" },
                    { id: 3, text: "TIFF" }
                ],
                goodAnswer: 2
            },
            {
                id: 13,
                title: "W SQL funkcja agregująca COUNT() służy do:",
                answers: [
                    { id: 0, text: "Sumowania wartości" },
                    { id: 1, text: "Zliczania liczby wierszy" },
                    { id: 2, text: "Obliczania średniej" },
                    { id: 3, text: "Znajdowania wartości maksymalnej" }
                ],
                goodAnswer: 1
            },
            {
                id: 14,
                title: "Jak w JavaScript zdefiniować funkcję o nazwie 'mojaFunkcja'?",
                answers: [
                    { id: 0, text: "function:mojaFunkcja()" },
                    { id: 1, text: "function mojaFunkcja()" },
                    { id: 2, text: "new function mojaFunkcja()" },
                    { id: 3, text: "def mojaFunkcja()" }
                ],
                goodAnswer: 1
            },
            {
                id: 15,
                title: "Który model barw oparty jest na zjawisku mieszania światła (synteza addytywna)?",
                answers: [
                    { id: 0, text: "CMYK" },
                    { id: 1, text: "RGB" },
                    { id: 2, text: "HSL" },
                    { id: 3, text: "HSV" }
                ],
                goodAnswer: 1
            },
            {
                id: 16,
                title: "Który znacznik HTML jest używany do osadzania kodu JavaScript bezpośrednio w dokumencie?",
                answers: [
                    { id: 0, text: "<javascript>" },
                    { id: 1, text: "<scripting>" },
                    { id: 2, text: "<script>" },
                    { id: 3, text: "<js>" }
                ],
                goodAnswer: 2
            },
            {
                id: 17,
                title: "W CSS selektor '#identyfikator' odnosi się do elementu o określonym:",
                answers: [
                    { id: 0, text: "Atrybucie class" },
                    { id: 1, text: "Znaczniku" },
                    { id: 2, text: "Atrybucie id" },
                    { id: 3, text: "Atrybucie name" }
                ],
                goodAnswer: 2
            },
            {
                id: 18,
                title: "Który typ danych w SQL służy do przechowywania krótkich ciągów znaków o zmiennej długości?",
                answers: [
                    { id: 0, text: "INT" },
                    { id: 1, text: "VARCHAR" },
                    { id: 2, text: "TEXT" },
                    { id: 3, text: "CHAR" }
                ],
                goodAnswer: 1
            },
            {
                id: 19,
                title: "Jaki wynik da działanie PHP: echo 5 % 2;?",
                answers: [
                    { id: 0, text: "2.5" },
                    { id: 1, text: "2" },
                    { id: 2, text: "1" },
                    { id: 3, text: "0" }
                ],
                goodAnswer: 2
            },
            {
                id: 20,
                title: "W dokumencie HTML5 znacznik <header> reprezentuje:",
                answers: [
                    { id: 0, text: "Nagłówek najwyższego stopnia (h1)" },
                    { id: 1, text: "Sekcję wprowadzającą lub zestaw linków nawigacyjnych" },
                    { id: 2, text: "Główną treść strony" },
                    { id: 3, text: "Stopkę strony" }
                ],
                goodAnswer: 1
            },
            {
                id: 21,
                title: "Która jednostka CSS jest relatywna względem rozmiaru czcionki elementu nadrzędnego?",
                answers: [
                    { id: 0, text: "px" },
                    { id: 1, text: "cm" },
                    { id: 2, text: "em" },
                    { id: 3, text: "pt" }
                ],
                goodAnswer: 2
            },
            {
                id: 22,
                title: "W języku SQL polecenie UPDATE służy do:",
                answers: [
                    { id: 0, text: "Tworzenia nowej tabeli" },
                    { id: 1, text: "Modyfikowania istniejących danych" },
                    { id: 2, text: "Wstawiania nowych wierszy" },
                    { id: 3, text: "Usuwania bazy danych" }
                ],
                goodAnswer: 1
            },
            {
                id: 23,
                title: "Jakie zdarzenie w JavaScript zostanie wywołane po kliknięciu myszką na element?",
                answers: [
                    { id: 0, text: "onmouseover" },
                    { id: 1, text: "onchange" },
                    { id: 2, text: "onclick" },
                    { id: 3, text: "onsubmit" }
                ],
                goodAnswer: 2
            },
            {
                id: 24,
                title: "Który z poniższych protokołów służy do bezpiecznego przesyłania plików?",
                answers: [
                    { id: 0, text: "FTP" },
                    { id: 1, text: "SFTP" },
                    { id: 2, text: "HTTP" },
                    { id: 3, text: "SMTP" }
                ],
                goodAnswer: 1
            },
            {
                id: 25,
                title: "Atrybut 'action' w znaczniku <form> określa:",
                answers: [
                    { id: 0, text: "Metodę przesyłania danych" },
                    { id: 1, text: "Adres URL, gdzie mają zostać wysłane dane" },
                    { id: 2, text: "Sposób kodowania znaków" },
                    { id: 3, text: "Nazwę formularza" }
                ],
                goodAnswer: 1
            },
            {
                id: 26,
                title: "W CSS właściwość 'float' może przyjąć wartość:",
                answers: [
                    { id: 0, text: "middle" },
                    { id: 1, text: "center" },
                    { id: 2, text: "left" },
                    { id: 3, text: "top" }
                ],
                goodAnswer: 2
            },
            {
                id: 27,
                title: "Jak nazywa się klucz w bazie danych, który jednoznacznie identyfikuje rekord?",
                answers: [
                    { id: 0, text: "Klucz obcy" },
                    { id: 1, text: "Klucz główny (podstawowy)" },
                    { id: 2, text: "Klucz unikalny" },
                    { id: 3, text: "Klucz zewnętrzny" }
                ],
                goodAnswer: 1
            },
            {
                id: 28,
                title: "W PHP funkcja include() służy do:",
                answers: [
                    { id: 0, text: "Definiowania klas" },
                    { id: 1, text: "Dołączania zawartości innego pliku" },
                    { id: 2, text: "Łączenia się z serwerem FTP" },
                    { id: 3, text: "Wyświetlania błędów" }
                ],
                goodAnswer: 1
            },
            {
                id: 29,
                title: "W JavaScript instrukcja 'typeof' służy do:",
                answers: [
                    { id: 0, text: "Konwersji typu danych" },
                    { id: 1, text: "Sprawdzenia typu danych zmiennej" },
                    { id: 2, text: "Tworzenia nowej zmiennej" },
                    { id: 3, text: "Porównania dwóch wartości" }
                ],
                goodAnswer: 1
            },
            {
                id: 30,
                title: "Znacznik <title> w dokumencie HTML powinien znajdować się wewnątrz sekcji:",
                answers: [
                    { id: 0, text: "<body>" },
                    { id: 1, text: "<footer>" },
                    { id: 2, text: "<head>" },
                    { id: 3, text: "<nav>" }
                ],
                goodAnswer: 2
            },
            {
                id: 31,
                title: "W CSS właściwość 'margin: 10px 20px;' ustawi marginesy:",
                answers: [
                    { id: 0, text: "Wszystkie na 10px" },
                    { id: 1, text: "Góra/dół 10px, lewy/prawy 20px" },
                    { id: 2, text: "Góra/dół 20px, lewy/prawy 10px" },
                    { id: 3, text: "Tylko górny 10px i dolny 20px" }
                ],
                goodAnswer: 1
            },
            {
                id: 32,
                title: "Relacja, w której jeden rekord tabeli A odpowiada wielu rekordom tabeli B, to:",
                answers: [
                    { id: 0, text: "1:1" },
                    { id: 1, text: "1:N" },
                    { id: 2, text: "N:M" },
                    { id: 3, text: "N:1" }
                ],
                goodAnswer: 1
            },
            {
                id: 33,
                title: "Który z operatorów PHP służy do konkatenacji (łączenia) ciągów znaków?",
                answers: [
                    { id: 0, text: "+" },
                    { id: 1, text: "&" },
                    { id: 2, text: "." },
                    { id: 3, text: "&&" }
                ],
                goodAnswer: 2
            },
            {
                id: 34,
                title: "W JavaScript metodą służącą do wypisania tekstu w oknie dialogowym jest:",
                answers: [
                    { id: 0, text: "console.log()" },
                    { id: 1, text: "document.write()" },
                    { id: 2, text: "alert()" },
                    { id: 3, text: "print()" }
                ],
                goodAnswer: 2
            },
            {
                id: 35,
                title: "Który standard definiuje zasady dostępności treści internetowych dla osób z niepełnosprawnościami?",
                answers: [
                    { id: 0, text: "W3C" },
                    { id: 1, text: "WCAG" },
                    { id: 2, text: "ISO" },
                    { id: 3, text: "WIFI" }
                ],
                goodAnswer: 1
            },
            {
                id: 36,
                title: "W HTML znacznik <a> z atrybutem 'href' służy do tworzenia:",
                answers: [
                    { id: 0, text: "Akapitów" },
                    { id: 1, text: "Hiperłączy" },
                    { id: 2, text: "Artykułów" },
                    { id: 3, text: "Tabel" }
                ],
                goodAnswer: 1
            },
            {
                id: 37,
                title: "W CSS właściwość 'display: none;' powoduje:",
                answers: [
                    { id: 0, text: "Ustawienie elementu jako przezroczystego" },
                    { id: 1, text: "Ukrycie elementu i usunięcie go z układu strony" },
                    { id: 2, text: "Zmniejszenie elementu do minimum" },
                    { id: 3, text: "Zablokowanie edycji elementu" }
                ],
                goodAnswer: 1
            },
            {
                id: 38,
                title: "W języku SQL, aby usunąć całą tabelę wraz ze strukturą, należy użyć:",
                answers: [
                    { id: 0, text: "DELETE TABLE" },
                    { id: 1, text: "DROP TABLE" },
                    { id: 2, text: "REMOVE TABLE" },
                    { id: 3, text: "ERASE TABLE" }
                ],
                goodAnswer: 1
            },
            {
                id: 39,
                title: "Która pętla w PHP wykona się przynajmniej raz, nawet jeśli warunek jest fałszywy?",
                answers: [
                    { id: 0, text: "for" },
                    { id: 1, text: "while" },
                    { id: 2, text: "do...while" },
                    { id: 3, text: "foreach" }
                ],
                goodAnswer: 2
            },
            {
                id: 40,
                title: "Metoda DOM 'getElementById()' służy do:",
                answers: [
                    { id: 0, text: "Pobrania wszystkich elementów danej klasy" },
                    { id: 1, text: "Pobrania pierwszego elementu o danym ID" },
                    { id: 2, text: "Zmiany identyfikatora elementu" },
                    { id: 3, text: "Usunięcia elementu o danym ID" }
                ],
                goodAnswer: 1
            },
            {
                id: 41,
                title: "Format grafiki wektorowej, który można edytować w pliku tekstowym, to:",
                answers: [
                    { id: 0, text: "GIF" },
                    { id: 1, text: "SVG" },
                    { id: 2, text: "JPG" },
                    { id: 3, text: "EPS" }
                ],
                goodAnswer: 1
            },
            {
                id: 42,
                title: "W HTML znacznik <table> zawiera wiersze definiowane przez:",
                answers: [
                    { id: 0, text: "<td>" },
                    { id: 1, text: "<th>" },
                    { id: 2, text: "<tr>" },
                    { id: 3, text: "<tf>" }
                ],
                goodAnswer: 2
            },
            {
                id: 43,
                title: "W CSS właściwość 'z-index' określa:",
                answers: [
                    { id: 0, text: "Szerokość elementu" },
                    { id: 1, text: "Kolejność nakładania się elementów" },
                    { id: 2, text: "Stopień przezroczystości" },
                    { id: 3, text: "Przybliżenie widoku" }
                ],
                goodAnswer: 1
            },
            {
                id: 44,
                title: "W SQL operator 'LIKE' służy do:",
                answers: [
                    { id: 0, text: "Porównywania liczb" },
                    { id: 1, text: "Wyszukiwania według wzorca znaków" },
                    { id: 2, text: "Łączenia dwóch zapytań" },
                    { id: 3, text: "Sortowania danych" }
                ],
                goodAnswer: 1
            },
            {
                id: 45,
                title: "W PHP tablica asocjacyjna to taka, w której klucze:",
                answers: [
                    { id: 0, text: "Są zawsze liczbami całkowitymi" },
                    { id: 1, text: "Są nazwami (stringami)" },
                    { id: 2, text: "Są automatycznie inkrementowane" },
                    { id: 3, text: "Nie istnieją" }
                ],
                goodAnswer: 1
            },
            {
                id: 46,
                title: "Która funkcja JavaScript służy do przekształcenia tekstu na liczbę całkowitą?",
                answers: [
                    { id: 0, text: "toString()" },
                    { id: 1, text: "Math.round()" },
                    { id: 2, text: "parseInt()" },
                    { id: 3, text: "toNumber()" }
                ],
                goodAnswer: 2
            },
            {
                id: 47,
                title: "Walidacja strony WWW to proces:",
                answers: [
                    { id: 0, text: "Sprawdzania poprawności kodu z regułami standardów (np. W3C)" },
                    { id: 1, text: "Wrzucania plików na serwer" },
                    { id: 2, text: "Tworzenia kopii zapasowej bazy danych" },
                    { id: 3, text: "Pozycjonowania strony w Google" }
                ],
                goodAnswer: 0
            },
            {
                id: 48,
                title: "W CSS pseudoklasa ':hover' aktywuje się, gdy:",
                answers: [
                    { id: 0, text: "Element został kliknięty" },
                    { id: 1, text: "Kursor myszy znajduje się nad elementem" },
                    { id: 2, text: "Link został już odwiedzony" },
                    { id: 3, text: "Element zyskał fokus" }
                ],
                goodAnswer: 1
            },
            {
                id: 49,
                title: "W SQL polecenie 'CREATE DATABASE' służy do:",
                answers: [
                    { id: 0, text: "Tworzenia nowej tabeli" },
                    { id: 1, text: "Tworzenia nowej bazy danych" },
                    { id: 2, text: "Dodawania użytkownika bazy" },
                    { id: 3, text: "Modyfikowania uprawnień" }
                ],
                goodAnswer: 1
            },
            {
                id: 50,
                title: "W języku PHP, aby rozpocząć sesję, należy użyć funkcji:",
                answers: [
                    { id: 0, text: "session_begin()" },
                    { id: 1, text: "session_start()" },
                    { id: 2, text: "start_session()" },
                    { id: 3, text: "header('Session')" }
                ],
                goodAnswer: 1
            },
            {
                id: 51,
                title: "Która właściwość CSS określa pozycjonowanie elementu względem okna przeglądarki?",
                answers: [
                    { id: 0, text: "absolute" },
                    { id: 1, text: "relative" },
                    { id: 2, text: "fixed" },
                    { id: 3, text: "static" }
                ],
                goodAnswer: 2
            },
            {
                id: 52,
                title: "W języku SQL polecenie GRANT służy do:",
                answers: [
                    { id: 0, text: "Nadawania uprawnień" },
                    { id: 1, text: "Odbierania uprawnień" },
                    { id: 2, text: "Usuwania użytkowników" },
                    { id: 3, text: "Tworzenia tabel" }
                ],
                goodAnswer: 0
            },
            {
                id: 53,
                title: "W JavaScript, aby sprawdzić długość ciągu znaków używamy:",
                answers: [
                    { id: 0, text: "size()" },
                    { id: 1, text: "count" },
                    { id: 2, text: "length" },
                    { id: 3, text: "len()" }
                ],
                goodAnswer: 2
            },
            {
                id: 54,
                title: "Która metoda przesyłania danych w formularzu jest widoczna w pasku adresu?",
                answers: [
                    { id: 0, text: "POST" },
                    { id: 1, text: "PUT" },
                    { id: 2, text: "GET" },
                    { id: 3, text: "SEND" }
                ],
                goodAnswer: 2
            },
            {
                id: 55,
                title: "W CSS właściwość 'box-sizing: border-box;' sprawia, że:",
                answers: [
                    { id: 0, text: "Marginesy są wliczane" },
                    { id: 1, text: "Padding i obramowanie są wliczane do szerokości" },
                    { id: 2, text: "Element jest ukryty" },
                    { id: 3, text: "Tło jest czerwone" }
                ],
                goodAnswer: 1
            },
            {
                id: 56,
                title: "W SQL, aby złączyć tabele dopasowując rekordy w obu, używamy:",
                answers: [
                    { id: 0, text: "LEFT JOIN" },
                    { id: 1, text: "OUTER JOIN" },
                    { id: 2, text: "INNER JOIN" },
                    { id: 3, text: "CROSS JOIN" }
                ],
                goodAnswer: 2
            },
            {
                id: 57,
                title: "Który znacznik HTML5 służy do wyświetlania artykułu?",
                answers: [
                    { id: 0, text: "<section>" },
                    { id: 1, text: "<article>" },
                    { id: 2, text: "<aside>" },
                    { id: 3, text: "<div>" }
                ],
                goodAnswer: 1
            },
            {
                id: 58,
                title: "W PHP tablica przechowująca dane z metody POST to:",
                answers: [
                    { id: 0, text: "$GET_POST" },
                    { id: 1, text: "$_POST" },
                    { id: 2, text: "$_SEND" },
                    { id: 3, text: "$HTTP_POST" }
                ],
                goodAnswer: 1
            },
            {
                id: 59,
                title: "W JavaScript 'break' wewnątrz pętli powoduje:",
                answers: [
                    { id: 0, text: "Kolejną iterację" },
                    { id: 1, text: "Wyjście z pętli" },
                    { id: 2, text: "Restart pętli" },
                    { id: 3, text: "Błąd skryptu" }
                ],
                goodAnswer: 1
            },
            {
                id: 60,
                title: "Atrybut 'colspan' służy do:",
                answers: [
                    { id: 0, text: "Łączenia wierszy" },
                    { id: 1, text: "Łączenia kolumn" },
                    { id: 2, text: "Koloru" },
                    { id: 3, text: "Marginesu" }
                ],
                goodAnswer: 1
            },
            {
                id: 61,
                title: "W CSS, aby usunąć podkreślenie linku:",
                answers: [
                    { id: 0, text: "text-style: none" },
                    { id: 1, text: "font-decoration: none" },
                    { id: 2, text: "text-decoration: none" },
                    { id: 3, text: "link-style: none" }
                ],
                goodAnswer: 2
            },
            {
                id: 62,
                title: "W SQL 'ALTER TABLE' służy do:",
                answers: [
                    { id: 0, text: "Usuwania" },
                    { id: 1, text: "Modyfikowania struktury" },
                    { id: 2, text: "Wstawiania" },
                    { id: 3, text: "Zmiany nazwy bazy" }
                ],
                goodAnswer: 1
            },
            {
                id: 63,
                title: "Komentarz w CSS to:",
                answers: [
                    { id: 0, text: "//" },
                    { id: 1, text: "/* */" },
                    { id: 2, text: "<!-- -->" },
                    { id: 3, text: "#" }
                ],
                goodAnswer: 1
            },
            {
                id: 64,
                title: "W PHP funkcja 'header()' służy do:",
                answers: [
                    { id: 0, text: "Nagłówka H1" },
                    { id: 1, text: "Przekierowania" },
                    { id: 2, text: "Meta-tagów" },
                    { id: 3, text: "Pogrubienia" }
                ],
                goodAnswer: 1
            },
            {
                id: 65,
                title: "W JS 'Math.random()' zwraca liczbę:",
                answers: [
                    { id: 0, text: "1-100" },
                    { id: 1, text: "0-1 włącznie" },
                    { id: 2, text: "0-1 wyłącznie" },
                    { id: 3, text: "całkowitą" }
                ],
                goodAnswer: 2
            },
            {
                id: 66,
                title: "W CMYK litera 'K' to:",
                answers: [
                    { id: 0, text: "Niebieski" },
                    { id: 1, text: "Czarny" },
                    { id: 2, text: "Zielony" },
                    { id: 3, text: "Brązowy" }
                ],
                goodAnswer: 1
            },
            {
                id: 67,
                title: "Protokół do odbierania poczty to:",
                answers: [
                    { id: 0, text: "SMTP" },
                    { id: 1, text: "POP3" },
                    { id: 2, text: "SNMP" },
                    { id: 3, text: "FTP" }
                ],
                goodAnswer: 1
            },
            {
                id: 68,
                title: "Atrybut 'method' w <form> to:",
                answers: [
                    { id: 0, text: "GET/POST" },
                    { id: 1, text: "SEND/RECEIVE" },
                    { id: 2, text: "IN/OUT" },
                    { id: 3, text: "SET/READ" }
                ],
                goodAnswer: 0
            },
            {
                id: 69,
                title: "W CSS 'opacity: 0.5' to:",
                answers: [
                    { id: 0, text: "Brak przezroczystości" },
                    { id: 1, text: "50% przezroczystości" },
                    { id: 2, text: "Ukrycie" },
                    { id: 3, text: "Jasność" }
                ],
                goodAnswer: 1
            },
            {
                id: 70,
                title: "W SQL 'DISTINCT' powoduje:",
                answers: [
                    { id: 0, text: "Sortowanie" },
                    { id: 1, text: "Pominięcie duplikatów" },
                    { id: 2, text: "Zliczanie" },
                    { id: 3, text: "Filtrowanie NULL" }
                ],
                goodAnswer: 1
            },
            {
                id: 71,
                title: "W PHP do sprawdzenia czy zmienna istnieje używamy:",
                answers: [
                    { id: 0, text: "is_set()" },
                    { id: 1, text: "empty()" },
                    { id: 2, text: "isset()" },
                    { id: 3, text: "defined()" }
                ],
                goodAnswer: 2
            },
            {
                id: 72,
                title: "W JS 'onload' występuje, gdy:",
                answers: [
                    { id: 0, text: "Kliknięto" },
                    { id: 1, text: "Załadowano stronę" },
                    { id: 2, text: "Opuszczono stronę" },
                    { id: 3, text: "Wysłano formularz" }
                ],
                goodAnswer: 1
            },
            {
                id: 73,
                title: "W HTML5 <canvas> to:",
                answers: [
                    { id: 0, text: "Wideo" },
                    { id: 1, text: "Grafika z JS" },
                    { id: 2, text: "Animacja Flash" },
                    { id: 3, text: "Pamięć" }
                ],
                goodAnswer: 1
            },
            {
                id: 74,
                title: "W CSS 'p > span' to:",
                answers: [
                    { id: 0, text: "Wszystkie span w p" },
                    { id: 1, text: "Bezpośrednie dzieci span w p" },
                    { id: 2, text: "p ze spanami" },
                    { id: 3, text: "span obok p" }
                ],
                goodAnswer: 1
            },
            {
                id: 75,
                title: "W SQL 'SUM()' to:",
                answers: [
                    { id: 0, text: "Ilość" },
                    { id: 1, text: "Suma wartości" },
                    { id: 2, text: "Łączenie" },
                    { id: 3, text: "Średnia" }
                ],
                goodAnswer: 1
            },
            {
                id: 76,
                title: "W PHP '===' sprawdza:",
                answers: [
                    { id: 0, text: "Wartość" },
                    { id: 1, text: "Typ" },
                    { id: 2, text: "Wartość i typ" },
                    { id: 3, text: "Obiekt" }
                ],
                goodAnswer: 2
            },
            {
                id: 77,
                title: "W JS 'confirm()' wyświetla:",
                answers: [
                    { id: 0, text: "Konsolę" },
                    { id: 1, text: "OK/Anuluj" },
                    { id: 2, text: "Hasło" },
                    { id: 3, text: "Submit" }
                ],
                goodAnswer: 1
            },
            {
                id: 78,
                title: "Grafika rastrowa to:",
                answers: [
                    { id: 0, text: "Krzywe" },
                    { id: 1, text: "Piksele" },
                    { id: 2, text: "CMYK" },
                    { id: 3, text: "Tekst" }
                ],
                goodAnswer: 1
            },
            {
                id: 79,
                title: "W HTML pole wymagane to:",
                answers: [
                    { id: 0, text: "validate" },
                    { id: 1, text: "needed" },
                    { id: 2, text: "required" },
                    { id: 3, text: "important" }
                ],
                goodAnswer: 2
            },
            {
                id: 80,
                title: "W CSS 'vh' to:",
                answers: [
                    { id: 0, text: "Font" },
                    { id: 1, text: "Viewport height" },
                    { id: 2, text: "Border" },
                    { id: 3, text: "DPI" }
                ],
                goodAnswer: 1
            },
            {
                id: 81,
                title: "W SQL 'WHERE' to:",
                answers: [
                    { id: 0, text: "Warunek" },
                    { id: 1, text: "Tabela" },
                    { id: 2, text: "Sortowanie" },
                    { id: 3, text: "Join" }
                ],
                goodAnswer: 0
            },
            {
                id: 82,
                title: "W PHP 'mysqli_query()' to:",
                answers: [
                    { id: 0, text: "Connect" },
                    { id: 1, text: "Zapytanie SQL" },
                    { id: 2, text: "Close" },
                    { id: 3, text: "Select DB" }
                ],
                goodAnswer: 1
            },
            {
                id: 83,
                title: "W JS 'push()' do tablicy:",
                answers: [
                    { id: 0, text: "Usuwa" },
                    { id: 1, text: "Dodaje na końcu" },
                    { id: 2, text: "Odwraca" },
                    { id: 3, text: "Sortuje" }
                ],
                goodAnswer: 1
            },
            {
                id: 84,
                title: "target='_blank' to:",
                answers: [
                    { id: 0, text: "Download" },
                    { id: 1, text: "Nowa karta" },
                    { id: 2, text: "To samo okno" },
                    { id: 3, text: "Blokada" }
                ],
                goodAnswer: 1
            },
            {
                id: 85,
                title: "W CSS 'italic' to:",
                answers: [
                    { id: 0, text: "Pogrubienie" },
                    { id: 1, text: "Kursywa" },
                    { id: 2, text: "Podkreślenie" },
                    { id: 3, text: "Wielkie litery" }
                ],
                goodAnswer: 1
            },
            {
                id: 86,
                title: "W SQL 'REVOKE' to:",
                answers: [
                    { id: 0, text: "Grant" },
                    { id: 1, text: "Odebranie uprawnień" },
                    { id: 2, text: "Hasło" },
                    { id: 3, text: "Blokada" }
                ],
                goodAnswer: 1
            },
            {
                id: 87,
                title: "W PHP 'die()' to:",
                answers: [
                    { id: 0, text: "Restart" },
                    { id: 1, text: "Zatrzymanie skryptu" },
                    { id: 2, text: "Cache" },
                    { id: 3, text: "Logout" }
                ],
                goodAnswer: 1
            },
            {
                id: 88,
                title: "W JS zasięg blokowy to:",
                answers: [
                    { id: 0, text: "var" },
                    { id: 1, text: "let" },
                    { id: 2, text: "block" },
                    { id: 3, text: "dim" }
                ],
                goodAnswer: 1
            },
            {
                id: 89,
                title: "charset='UTF-8' to:",
                answers: [
                    { id: 0, text: "Język" },
                    { id: 1, text: "Kodowanie" },
                    { id: 2, text: "Tytuł" },
                    { id: 3, text: "SEO" }
                ],
                goodAnswer: 1
            },
            {
                id: 90,
                title: "list-style-type: square to:",
                answers: [
                    { id: 0, text: "Kółka" },
                    { id: 1, text: "Kwadraty" },
                    { id: 2, text: "Cyfry" },
                    { id: 3, text: "Brak" }
                ],
                goodAnswer: 1
            },
            {
                id: 91,
                title: "W SQL dodanie rekordu to:",
                answers: [
                    { id: 0, text: "ADD" },
                    { id: 1, text: "INSERT INTO" },
                    { id: 2, text: "UPDATE" },
                    { id: 3, text: "CREATE" }
                ],
                goodAnswer: 1
            },
            {
                id: 92,
                title: "W PHP 'count()' to:",
                answers: [
                    { id: 0, text: "Suma" },
                    { id: 1, text: "Liczba elementów" },
                    { id: 2, text: "Pierwszy" },
                    { id: 3, text: "Indeks" }
                ],
                goodAnswer: 1
            },
            {
                id: 93,
                title: "W JS '!=' to:",
                answers: [
                    { id: 0, text: "Równe" },
                    { id: 1, text: "Różne" },
                    { id: 2, text: "NOT" },
                    { id: 3, text: "Mniejsze" }
                ],
                goodAnswer: 1
            },
            {
                id: 94,
                title: "Bezstratny dźwięk to:",
                answers: [
                    { id: 0, text: "MP3" },
                    { id: 1, text: "FLAC" },
                    { id: 2, text: "WMA" },
                    { id: 3, text: "OGG" }
                ],
                goodAnswer: 1
            },
            {
                id: 95,
                title: "Znacznik <hr> to:",
                answers: [
                    { id: 0, text: "BR" },
                    { id: 1, text: "Linia pozioma" },
                    { id: 2, text: "B" },
                    { id: 3, text: "H1" }
                ],
                goodAnswer: 1
            },
            {
                id: 96,
                title: "text-align: justify to:",
                answers: [
                    { id: 0, text: "Center" },
                    { id: 1, text: "Wyjustowanie" },
                    { id: 2, text: "Right" },
                    { id: 3, text: "Caps" }
                ],
                goodAnswer: 1
            },
            {
                id: 97,
                title: "GROUP BY używamy z:",
                answers: [
                    { id: 0, text: "Agregatami" },
                    { id: 1, text: "DELETE" },
                    { id: 2, text: "JOIN" },
                    { id: 3, text: "VIEW" }
                ],
                goodAnswer: 0
            },
            {
                id: 98,
                title: "PHP obiektowo DB to:",
                answers: [
                    { id: 0, text: "MySQL" },
                    { id: 1, text: "PDO" },
                    { id: 2, text: "Connect" },
                    { id: 3, text: "DB" }
                ],
                goodAnswer: 1
            },
            {
                id: 99,
                title: "W JS 'prompt()' to:",
                answers: [
                    { id: 0, text: "Alert" },
                    { id: 1, text: "Pobranie danych tekstowych" },
                    { id: 2, text: "Błąd" },
                    { id: 3, text: "Zamknięcie" }
                ],
                goodAnswer: 1
            },
            {
                id: 100,
                title: "W programie GIMP do zaznaczania obszarów o podobnym kolorze służy:",
                answers: [
                    { id: 0, text: "Pędzel" },
                    { id: 1, text: "Różdżka" },
                    { id: 2, text: "Gumka" },
                    { id: 3, text: "Ołówek" }
                ],
                goodAnswer: 1
            },
            {
                id: 101,
                title: "Który atrybut HTML pozwala na unikalne zidentyfikowanie elementu na stronie?",
                answers: [
                    { id: 0, text: "class" },
                    { id: 1, text: "id" },
                    { id: 2, text: "name" },
                    { id: 3, text: "type" }
                ],
                goodAnswer: 1
            },
            {
                id: 102,
                title: "Jaki skrót klawiszowy w przeglądarce otwiera narzędzia deweloperskie?",
                answers: [
                    { id: 0, text: "F1" },
                    { id: 1, text: "F5" },
                    { id: 2, text: "F12" },
                    { id: 3, text: "Ctrl+S" }
                ],
                goodAnswer: 2
            },
            {
                id: 103,
                title: "W CSS właściwość 'border-radius' służy do:",
                answers: [
                    { id: 0, text: "Zmiany koloru obramowania" },
                    { id: 1, text: "Zaokrąglenia rogów" },
                    { id: 2, text: "Grubości linii" },
                    { id: 3, text: "Cienia" }
                ],
                goodAnswer: 1
            },
            {
                id: 104,
                title: "Który z poniższych jest językiem zapytań strukturalnych?",
                answers: [
                    { id: 0, text: "HTML" },
                    { id: 1, text: "CSS" },
                    { id: 2, text: "SQL" },
                    { id: 3, text: "XML" }
                ],
                goodAnswer: 2
            },
            {
                id: 105,
                title: "W JavaScript 'NaN' oznacza:",
                answers: [
                    { id: 0, text: "Nowy numer" },
                    { id: 1, text: "Not a Number" },
                    { id: 2, text: "Null" },
                    { id: 3, text: "Negative" }
                ],
                goodAnswer: 1
            },
            {
                id: 106,
                title: "W PHP funkcja 'rand(1, 10)' zwróci:",
                answers: [
                    { id: 0, text: "Liczbę od 1 do 10" },
                    { id: 1, text: "Zawsze 1" },
                    { id: 2, text: "Zawsze 10" },
                    { id: 3, text: "Liczbę zmiennoprzecinkową" }
                ],
                goodAnswer: 0
            },
            {
                id: 107,
                title: "W SQL polecenie 'TRUNCATE TABLE' powoduje:",
                answers: [
                    { id: 0, text: "Usunięcie struktury tabeli" },
                    { id: 1, text: "Usunięcie wszystkich rekordów bez usuwania struktury" },
                    { id: 2, text: "Zmianę nazwy" },
                    { id: 3, text: "Kopiowanie tabeli" }
                ],
                goodAnswer: 1
            },
            {
                id: 108,
                title: "W CSS 'flex-direction: column' ustawi elementy:",
                answers: [
                    { id: 0, text: "W poziomie" },
                    { id: 1, text: "W pionie" },
                    { id: 2, text: "Na ukos" },
                    { id: 3, text: "W losowej kolejności" }
                ],
                goodAnswer: 1
            },
            {
                id: 109,
                title: "Skrót CMS oznacza:",
                answers: [
                    { id: 0, text: "Content Management System" },
                    { id: 1, text: "Core Media System" },
                    { id: 2, text: "Computer Management Software" },
                    { id: 3, text: "Creative Mode Style" }
                ],
                goodAnswer: 0
            },
            {
                id: 110,
                title: "W HTML znacznik <br> służy do:",
                answers: [
                    { id: 0, text: "Pogrubienia" },
                    { id: 1, text: "Złamania linii" },
                    { id: 2, text: "Wstawienia obrazka" },
                    { id: 3, text: "Tworzenia tabeli" }
                ],
                goodAnswer: 1
            },
            {
                id: 111,
                title: "Która z metod HTTP jest uważana za bezpieczną (nie zmienia stanu serwera)?",
                answers: [
                    { id: 0, text: "POST" },
                    { id: 1, text: "GET" },
                    { id: 2, text: "DELETE" },
                    { id: 3, text: "PUT" }
                ],
                goodAnswer: 1
            },
            {
                id: 112,
                title: "W CSS 'cursor: pointer' zmieni kursor na:",
                answers: [
                    { id: 0, text: "Strzałkę" },
                    { id: 1, text: "Rączkę (wskaźnik)" },
                    { id: 2, text: "Klepsydrę" },
                    { id: 3, text: "Tekstowy" }
                ],
                goodAnswer: 1
            },
            {
                id: 113,
                title: "W SQL klauzula 'HAVING' jest używana do filtrowania:",
                answers: [
                    { id: 0, text: "Wierszy" },
                    { id: 1, text: "Grup" },
                    { id: 2, text: "Kolumn" },
                    { id: 3, text: "Baz danych" }
                ],
                goodAnswer: 1
            },
            {
                id: 114,
                title: "W JS 'document.querySelector('.klasa')' wybierze:",
                answers: [
                    { id: 0, text: "Wszystkie elementy z tą klasą" },
                    { id: 1, text: "Pierwszy element z tą klasą" },
                    { id: 2, text: "Element o ID klasa" },
                    { id: 3, text: "Tag o nazwie klasa" }
                ],
                goodAnswer: 1
            },
            {
                id: 115,
                title: "W PHP '$_SESSION' to tablica:",
                answers: [
                    { id: 0, text: "Lokalna" },
                    { id: 1, text: "Superglobalna" },
                    { id: 2, text: "Pusta" },
                    { id: 3, text: "Chroniona" }
                ],
                goodAnswer: 1
            },
            {
                id: 116,
                title: "Znacznik <nav> w HTML5 oznacza:",
                answers: [
                    { id: 0, text: "Nawigację" },
                    { id: 1, text: "Stopkę" },
                    { id: 2, text: "Nagłówek" },
                    { id: 3, text: "Obrazek" }
                ],
                goodAnswer: 0
            },
            {
                id: 117,
                title: "W CSS 'font-family' określa:",
                answers: [
                    { id: 0, text: "Rozmiar" },
                    { id: 1, text: "Rodzaj czcionki" },
                    { id: 2, text: "Kolor" },
                    { id: 3, text: "Styl" }
                ],
                goodAnswer: 1
            },
            {
                id: 118,
                title: "W SQL 'PRIMARY KEY' musi być:",
                answers: [
                    { id: 0, text: "Unikalny i niepusty" },
                    { id: 1, text: "Liczbą" },
                    { id: 2, text: "Tekstem" },
                    { id: 3, text: "Kluczem obcym" }
                ],
                goodAnswer: 0
            },
            {
                id: 119,
                title: "W JS 'setTimeout()' służy do:",
                answers: [
                    { id: 0, text: "Pętli" },
                    { id: 1, text: "Wykonania kodu po opóźnieniu" },
                    { id: 2, text: "Zatrzymania strony" },
                    { id: 3, text: "Odświeżenia" }
                ],
                goodAnswer: 1
            },
            {
                id: 120,
                title: "Format .webp to format:",
                answers: [
                    { id: 0, text: "Audio" },
                    { id: 1, text: "Graficzny (nowoczesny)" },
                    { id: 2, text: "Tekstowy" },
                    { id: 3, text: "Wideo" }
                ],
                goodAnswer: 1
            },
            {
                id: 121,
                title: "W HTML <input type='password'> spowoduje:",
                answers: [
                    { id: 0, text: "Ukrycie wpisywanych znaków" },
                    { id: 1, text: "Zablokowanie pola" },
                    { id: 2, text: "Szyfrowanie bazy" },
                    { id: 3, text: "Wysłanie maila" }
                ],
                goodAnswer: 0
            },
            {
                id: 122,
                title: "W CSS 'width: 100%' oznacza:",
                answers: [
                    { id: 0, text: "100 pikseli" },
                    { id: 1, text: "Szerokość całego ekranu" },
                    { id: 2, text: "Szerokość elementu nadrzędnego" },
                    { id: 3, text: "Szerokość czcionki" }
                ],
                goodAnswer: 2
            },
            {
                id: 123,
                title: "W SQL 'DROP DATABASE' usuwa:",
                answers: [
                    { id: 0, text: "Tabelę" },
                    { id: 1, text: "Całą bazę danych" },
                    { id: 2, text: "Rekord" },
                    { id: 3, text: "Użytkownika" }
                ],
                goodAnswer: 1
            },
            {
                id: 124,
                title: "W JS 'console.error()' wypisuje:",
                answers: [
                    { id: 0, text: "Informację" },
                    { id: 1, text: "Błąd w konsoli" },
                    { id: 2, text: "Ostrzeżenie" },
                    { id: 3, text: "Alert" }
                ],
                goodAnswer: 1
            },
            {
                id: 125,
                title: "PHP jest językiem wykonywanym po stronie:",
                answers: [
                    { id: 0, text: "Klienta (przeglądarki)" },
                    { id: 1, text: "Serwera" },
                    { id: 2, text: "Bazy danych" },
                    { id: 3, text: "Routera" }
                ],
                goodAnswer: 1
            },
            {
                id: 126,
                title: "W HTML <ul> to lista:",
                answers: [
                    { id: 0, text: "Numerowana" },
                    { id: 1, text: "Punktowana (nienumerowana)" },
                    { id: 2, text: "Definicji" },
                    { id: 3, text: "Zagnieżdżona" }
                ],
                goodAnswer: 1
            },
            {
                id: 127,
                title: "W CSS 'background-image: url('foto.jpg')' wstawi:",
                answers: [
                    { id: 0, text: "Obrazek w treści" },
                    { id: 1, text: "Obrazek jako tło" },
                    { id: 2, text: "Link do obrazka" },
                    { id: 3, text: "Ikonę strony" }
                ],
                goodAnswer: 1
            },
            {
                id: 128,
                title: "W SQL 'JOIN' służy do:",
                answers: [
                    { id: 0, text: "Usuwania" },
                    { id: 1, text: "Łączenia tabel" },
                    { id: 2, text: "Sortowania" },
                    { id: 3, text: "Grupowania" }
                ],
                goodAnswer: 1
            },
            {
                id: 129,
                title: "W JS 'array.pop()' usuwa:",
                answers: [
                    { id: 0, text: "Pierwszy element" },
                    { id: 1, text: "Ostatni element" },
                    { id: 2, text: "Całą tablicę" },
                    { id: 3, text: "Losowy element" }
                ],
                goodAnswer: 1
            },
            {
                id: 130,
                title: "Model barw wykorzystywany w druku to:",
                answers: [
                    { id: 0, text: "RGB" },
                    { id: 1, text: "CMYK" },
                    { id: 2, text: "HSB" },
                    { id: 3, text: "Lab" }
                ],
                goodAnswer: 1
            },
            {
                id: 131,
                title: "W HTML5 znacznik <footer> to:",
                answers: [
                    { id: 0, text: "Nagłówek" },
                    { id: 1, text: "Stopka" },
                    { id: 2, text: "Bok" },
                    { id: 3, text: "Menu" }
                ],
                goodAnswer: 1
            },
            {
                id: 132,
                title: "W CSS 'padding' to margines:",
                answers: [
                    { id: 0, text: "Zewnętrzny" },
                    { id: 1, text: "Wewnętrzny" },
                    { id: 2, text: "Dolny" },
                    { id: 3, text: "Lewy" }
                ],
                goodAnswer: 1
            },
            {
                id: 133,
                title: "W SQL 'AS' służy do:",
                answers: [
                    { id: 0, text: "Sortowania" },
                    { id: 1, text: "Nadawania aliasu" },
                    { id: 2, text: "Łączenia" },
                    { id: 3, text: "Sumowania" }
                ],
                goodAnswer: 1
            },
            {
                id: 134,
                title: "W JS 'localStorage' przechowuje dane:",
                answers: [
                    { id: 0, text: "Do zamknięcia karty" },
                    { id: 1, text: "Trwale w przeglądarce" },
                    { id: 2, text: "Na serwerze" },
                    { id: 3, text: "W bazie danych" }
                ],
                goodAnswer: 1
            },
            {
                id: 135,
                title: "W PHP 'include_once' zapobiega:",
                answers: [
                    { id: 0, text: "Błędom składni" },
                    { id: 1, text: "Wielokrotnemu dołączeniu tego samego pliku" },
                    { id: 2, text: "Włamaniom" },
                    { id: 3, text: "Usuwaniu plików" }
                ],
                goodAnswer: 1
            },
            {
                id: 136,
                title: "Znacznik <title> wyświetla się w:",
                answers: [
                    { id: 0, text: "Treści strony" },
                    { id: 1, text: "Pasku tytułu okna przeglądarki" },
                    { id: 2, text: "Stopce" },
                    { id: 3, text: "Konsoli" }
                ],
                goodAnswer: 1
            },
            {
                id: 137,
                title: "W CSS 'border: none' spowoduje:",
                answers: [
                    { id: 0, text: "Cienkie obramowanie" },
                    { id: 1, text: "Brak obramowania" },
                    { id: 2, text: "Czerwone obramowanie" },
                    { id: 3, text: "Podwójne obramowanie" }
                ],
                goodAnswer: 1
            },
            {
                id: 138,
                title: "W SQL 'MIN()' zwraca:",
                answers: [
                    { id: 0, text: "Średnią" },
                    { id: 1, text: "Wartość minimalną" },
                    { id: 2, text: "Suma" },
                    { id: 3, text: "Ilość" }
                ],
                goodAnswer: 1
            },
            {
                id: 139,
                title: "W JS 'addEventListener' służy do:",
                answers: [
                    { id: 0, text: "Zmiany koloru" },
                    { id: 1, text: "Obsługi zdarzeń" },
                    { id: 2, text: "Pętli" },
                    { id: 3, text: "Łączenia z DB" }
                ],
                goodAnswer: 1
            },
            {
                id: 140,
                title: "Rozdzielczość ekranowa (web) to standardowo:",
                answers: [
                    { id: 0, text: "300 dpi" },
                    { id: 1, text: "72 dpi" },
                    { id: 2, text: "600 dpi" },
                    { id: 3, text: "1200 dpi" }
                ],
                goodAnswer: 1
            },
            {
                id: 141,
                title: "W HTML <form> atrybut 'enctype' jest ważny przy:",
                answers: [
                    { id: 0, text: "Logowaniu" },
                    { id: 1, text: "Przesyłaniu plików" },
                    { id: 2, text: "Wybieraniu koloru" },
                    { id: 3, text: "Rejestracji" }
                ],
                goodAnswer: 1
            },
            {
                id: 142,
                title: "W CSS 'text-transform: uppercase' zmieni tekst na:",
                answers: [
                    { id: 0, text: "Małe litery" },
                    { id: 1, text: "WIELKIE LITERY" },
                    { id: 2, text: "Pogrubione" },
                    { id: 3, text: "Kursywę" }
                ],
                goodAnswer: 1
            },
            {
                id: 143,
                title: "W SQL 'DESC' przy ORDER BY oznacza:",
                answers: [
                    { id: 0, text: "Opis" },
                    { id: 1, text: "Kolejność malejącą" },
                    { id: 2, text: "Kolejność rosnącą" },
                    { id: 3, text: "Ukrycie danych" }
                ],
                goodAnswer: 1
            },
            {
                id: 144,
                title: "W JS 'typeof []' (tablicy) zwróci:",
                answers: [
                    { id: 0, text: "array" },
                    { id: 1, text: "object" },
                    { id: 2, text: "list" },
                    { id: 3, text: "null" }
                ],
                goodAnswer: 1
            },
            {
                id: 145,
                title: "W PHP '$a .' '. $b' kropka to:",
                answers: [
                    { id: 0, text: "Mnożenie" },
                    { id: 1, text: "Konkatenacja" },
                    { id: 2, text: "Dzielenie" },
                    { id: 3, text: "Błąd" }
                ],
                goodAnswer: 1
            },
            {
                id: 146,
                title: "Atrybut 'src' w <img> określa:",
                answers: [
                    { id: 0, text: "Rozmiar" },
                    { id: 1, text: "Źródło (ścieżkę do pliku)" },
                    { id: 2, text: "Tekst" },
                    { id: 3, text: "Obramowanie" }
                ],
                goodAnswer: 1
            },
            {
                id: 147,
                title: "W CSS 'position: relative' pozycjonuje względem:",
                answers: [
                    { id: 0, text: "Okna" },
                    { id: 1, text: "Pierwotnego położenia" },
                    { id: 2, text: "Rodzica" },
                    { id: 3, text: "Góry strony" }
                ],
                goodAnswer: 1
            },
            {
                id: 148,
                title: "W SQL 'UPDATE ... SET' służy do:",
                answers: [
                    { id: 0, text: "Tworzenia" },
                    { id: 1, text: "Aktualizacji danych" },
                    { id: 2, text: "Usuwania" },
                    { id: 3, text: "Uprawnień" }
                ],
                goodAnswer: 1
            },
            {
                id: 149,
                title: "W JS 'window.location.href' pozwala na:",
                answers: [
                    { id: 0, text: "Zmiany koloru" },
                    { id: 1, text: "Przekierowanie na inny URL" },
                    { id: 2, text: "Zamknięcie okna" },
                    { id: 3, text: "Wydruk" }
                ],
                goodAnswer: 1
            },
            {
                id: 150,
                title: "Atrybut HTML 'target=_self' to:",
                answers: [
                    { id: 0, text: "Nowa karta" },
                    { id: 1, text: "To samo okno" },
                    { id: 2, text: "Rodzic" },
                    { id: 3, text: "Góra" }
                ],
                goodAnswer: 1
            },
            {
                id: 151,
                title: "W CSS 'visibility: hidden' sprawia, że:",
                answers: [
                    { id: 0, text: "Element znika i nie zajmuje miejsca" },
                    { id: 1, text: "Element jest niewidoczny, ale zajmuje miejsce" },
                    { id: 2, text: "Element jest półprzezroczysty" },
                    { id: 3, text: "Element jest czerwony" }
                ],
                goodAnswer: 1
            },
            {
                id: 152,
                title: "W SQL 'CREATE INDEX' służy do:",
                answers: [
                    { id: 0, text: "Tworzenia tabeli" },
                    { id: 1, text: "Przyspieszenia wyszukiwania" },
                    { id: 2, text: "Usuwania duplikatów" },
                    { id: 3, text: "Relacji" }
                ],
                goodAnswer: 1
            },
            {
                id: 153,
                title: "W JS 'JSON.parse()' zamienia:",
                answers: [
                    { id: 0, text: "Obiekt na tekst" },
                    { id: 1, text: "Tekst JSON na obiekt" },
                    { id: 2, text: "Liczbę na tekst" },
                    { id: 3, text: "Obraz na tekst" }
                ],
                goodAnswer: 1
            },
            {
                id: 154,
                title: "W PHP '$_COOKIE' służy do:",
                answers: [
                    { id: 0, text: "Sesji" },
                    { id: 1, text: "Obsługi ciasteczek" },
                    { id: 2, text: "Bazy danych" },
                    { id: 3, text: "Hasłowania" }
                ],
                goodAnswer: 1
            },
            {
                id: 155,
                title: "Znacznik <option> występuje wewnątrz:",
                answers: [
                    { id: 0, text: "<ul>" },
                    { id: 1, text: "<select>" },
                    { id: 2, text: "<table>" },
                    { id: 3, text: "<div>" }
                ],
                goodAnswer: 1
            },
            {
                id: 156,
                title: "W CSS 'overflow: scroll' doda:",
                answers: [
                    { id: 0, text: "Cień" },
                    { id: 1, text: "Paski przewijania" },
                    { id: 2, text: "Kolor" },
                    { id: 3, text: "Margines" }
                ],
                goodAnswer: 1
            },
            {
                id: 157,
                title: "W SQL 'NOT NULL' oznacza, że kolumna:",
                answers: [
                    { id: 0, text: "Może być pusta" },
                    { id: 1, text: "Musi zawierać wartość" },
                    { id: 2, text: "Musi być zerem" },
                    { id: 3, text: "Jest kluczem" }
                ],
                goodAnswer: 1
            },
            {
                id: 158,
                title: "W JS 'Math.floor(4.9)' zwróci:",
                answers: [
                    { id: 0, text: "5" },
                    { id: 1, text: "4" },
                    { id: 2, text: "4.5" },
                    { id: 3, text: "0" }
                ],
                goodAnswer: 1
            },
            {
                id: 159,
                title: "W PHP funkcja 'fopen()' służy do:",
                answers: [
                    { id: 0, text: "Bazy danych" },
                    { id: 1, text: "Otwarcia pliku" },
                    { id: 2, text: "Wysłania maila" },
                    { id: 3, text: "Sesji" }
                ],
                goodAnswer: 1
            },
            {
                id: 160,
                title: "Jaki protokół służy do przesyłania stron WWW?",
                answers: [
                    { id: 0, text: "FTP" },
                    { id: 1, text: "HTTP" },
                    { id: 2, text: "SMTP" },
                    { id: 3, text: "POP3" }
                ],
                goodAnswer: 1
            },
            {
                id: 161,
                title: "W CSS 'max-width' określa:",
                answers: [
                    { id: 0, text: "Stałą szerokość" },
                    { id: 1, text: "Maksymalną szerokość" },
                    { id: 2, text: "Minimalną szerokość" },
                    { id: 3, text: "Szerokość czcionki" }
                ],
                goodAnswer: 1
            },
            {
                id: 162,
                title: "W SQL 'AND' wymaga, aby:",
                answers: [
                    { id: 0, text: "Jeden warunek był spełniony" },
                    { id: 1, text: "Oba warunki były spełnione" },
                    { id: 2, text: "Żaden nie był spełniony" },
                    { id: 3, text: "Zwrócono błąd" }
                ],
                goodAnswer: 1
            },
            {
                id: 163,
                title: "W JS 'String(123)' zamieni liczbę na:",
                answers: [
                    { id: 0, text: "Obiekt" },
                    { id: 1, text: "Tekst" },
                    { id: 2, text: "Tablicę" },
                    { id: 3, text: "Null" }
                ],
                goodAnswer: 1
            },
            {
                id: 164,
                title: "W PHP 'setcookie()' musi być wywołane:",
                answers: [
                    { id: 0, text: "Na końcu" },
                    { id: 1, text: "Przed wysłaniem nagłówków" },
                    { id: 2, text: "Wewnątrz <body>" },
                    { id: 3, text: "Tylko w JS" }
                ],
                goodAnswer: 1
            },
            {
                id: 165,
                title: "Tag <head> zawiera informacje:",
                answers: [
                    { id: 0, text: "Widoczne na stronie" },
                    { id: 1, text: "Techniczne (metadane)" },
                    { id: 2, text: "Tylko skrypty" },
                    { id: 3, text: "Stopkę" }
                ],
                goodAnswer: 1
            },
            {
                id: 166,
                title: "W CSS 'color: #FF0000' to kolor:",
                answers: [
                    { id: 0, text: "Zielony" },
                    { id: 1, text: "Czerwony" },
                    { id: 2, text: "Niebieski" },
                    { id: 3, text: "Biały" }
                ],
                goodAnswer: 1
            },
            {
                id: 167,
                title: "W SQL 'DELETE FROM tabela' bez WHERE:",
                answers: [
                    { id: 0, text: "Nic nie zrobi" },
                    { id: 1, text: "Usunie wszystkie rekordy" },
                    { id: 2, text: "Usunie tabelę" },
                    { id: 3, text: "Zgłosi błąd" }
                ],
                goodAnswer: 1
            },
            {
                id: 168,
                title: "W JS 'NaN === NaN' zwróci:",
                answers: [
                    { id: 0, text: "true" },
                    { id: 1, text: "false" },
                    { id: 2, text: "undefined" },
                    { id: 3, text: "null" }
                ],
                goodAnswer: 1
            },
            {
                id: 169,
                title: "W PHP '$_SERVER['REMOTE_ADDR']' to:",
                answers: [
                    { id: 0, text: "Adres serwera" },
                    { id: 1, text: "Adres IP użytkownika" },
                    { id: 2, text: "Adres bazy" },
                    { id: 3, text: "URL strony" }
                ],
                goodAnswer: 1
            },
            {
                id: 170,
                title: "Atrybut 'alt' w <img> jest ważny dla:",
                answers: [
                    { id: 0, text: "SEO i czytników ekranu" },
                    { id: 1, text: "Rozmiaru" },
                    { id: 2, text: "Szybkości ładowania" },
                    { id: 3, text: "Koloru" }
                ],
                goodAnswer: 0
            },
            {
                id: 171,
                title: "W CSS 'display: block' sprawia, że element:",
                answers: [
                    { id: 0, text: "Jest w linii" },
                    { id: 1, text: "Zajmuje całą szerokość i zaczyna się od nowej linii" },
                    { id: 2, text: "Jest ukryty" },
                    { id: 3, text: "Jest elastyczny" }
                ],
                goodAnswer: 1
            },
            {
                id: 172,
                title: "W SQL 'BETWEEN 10 AND 20' wybierze:",
                answers: [
                    { id: 0, text: "Tylko 10 i 20" },
                    { id: 1, text: "Zakres od 10 do 20" },
                    { id: 2, text: "Liczby poza zakresem" },
                    { id: 3, text: "Wszystko" }
                ],
                goodAnswer: 1
            },
            {
                id: 173,
                title: "W JS 'array.length = 0' spowoduje:",
                answers: [
                    { id: 0, text: "Błąd" },
                    { id: 1, text: "Wyczyszczenie tablicy" },
                    { id: 2, text: "Nic" },
                    { id: 3, text: "Dodanie elementu" }
                ],
                goodAnswer: 1
            },
            {
                id: 174,
                title: "W PHP 'header('Location: page.php')' to:",
                answers: [
                    { id: 0, text: "Tytuł strony" },
                    { id: 1, text: "Przekierowanie" },
                    { id: 2, text: "Łącze" },
                    { id: 3, text: "Błąd" }
                ],
                goodAnswer: 1
            },
            {
                id: 175,
                title: "Znacznik <iframe> służy do:",
                answers: [
                    { id: 0, text: "Obrazków" },
                    { id: 1, text: "Osadzania innej strony wewnątrz bieżącej" },
                    { id: 2, text: "Listy" },
                    { id: 3, text: "Skryptów" }
                ],
                goodAnswer: 1
            },
            {
                id: 176,
                title: "W CSS 'letter-spacing' to:",
                answers: [
                    { id: 0, text: "Interlinia" },
                    { id: 1, text: "Odstępy między literami" },
                    { id: 2, text: "Margines" },
                    { id: 3, text: "Padding" }
                ],
                goodAnswer: 1
            },
            {
                id: 177,
                title: "W SQL 'IN (1, 2, 3)' sprawdza czy wartość:",
                answers: [
                    { id: 0, text: "Jest większa od 3" },
                    { id: 1, text: "Znajduje się w podanej liście" },
                    { id: 2, text: "Jest sumą" },
                    { id: 3, text: "Jest zerem" }
                ],
                goodAnswer: 1
            },
            {
                id: 178,
                title: "W JS '!!true' zwróci:",
                answers: [
                    { id: 0, text: "false" },
                    { id: 1, text: "true" },
                    { id: 2, text: "0" },
                    { id: 3, text: "1" }
                ],
                goodAnswer: 1
            },
            {
                id: 179,
                title: "W PHP funkcja 'password_hash()' służy do:",
                answers: [
                    { id: 0, text: "Logowania" },
                    { id: 1, text: "Bezpiecznego szyfrowania hasła" },
                    { id: 2, text: "Zmiany hasła" },
                    { id: 3, text: "Sesji" }
                ],
                goodAnswer: 1
            },
            {
                id: 180,
                title: "Plik .htaccess służy do:",
                answers: [
                    { id: 0, text: "Bazy danych" },
                    { id: 1, text: "Konfiguracji serwera Apache" },
                    { id: 2, text: "Stylów" },
                    { id: 3, text: "Skryptów" }
                ],
                goodAnswer: 1
            },
            {
                id: 181,
                title: "W CSS 'z-index' działa tylko dla elementów:",
                answers: [
                    { id: 0, text: "Ukrytych" },
                    { id: 1, text: "Pozycjonowanych (innych niż static)" },
                    { id: 2, text: "Blokowych" },
                    { id: 3, text: "List" }
                ],
                goodAnswer: 1
            },
            {
                id: 182,
                title: "W SQL 'DROP COLUMN' usuwa:",
                answers: [
                    { id: 0, text: "Wiersz" },
                    { id: 1, text: "Kolumnę z tabeli" },
                    { id: 2, text: "Tabelę" },
                    { id: 3, text: "Bazę" }
                ],
                goodAnswer: 1
            },
            {
                id: 183,
                title: "W JS 'document.createElement()' tworzy:",
                answers: [
                    { id: 0, text: "Atrybut" },
                    { id: 1, text: "Nowy element HTML" },
                    { id: 2, text: "Tekst" },
                    { id: 3, text: "Styl" }
                ],
                goodAnswer: 1
            },
            {
                id: 184,
                title: "W PHP '$_FILES' zawiera:",
                answers: [
                    { id: 0, text: "Tekst" },
                    { id: 1, text: "Dane o przesłanych plikach" },
                    { id: 2, text: "Błędy" },
                    { id: 3, text: "URL" }
                ],
                goodAnswer: 1
            },
            {
                id: 185,
                title: "Atrybut 'placeholder' w <input> to:",
                answers: [
                    { id: 0, text: "Wartość domyślna" },
                    { id: 1, text: "Tekst pomocniczy widoczny przed wpisaniem" },
                    { id: 2, text: "Hasło" },
                    { id: 3, text: "Błąd" }
                ],
                goodAnswer: 1
            },
            {
                id: 186,
                title: "W CSS 'white-space: nowrap' spowoduje:",
                answers: [
                    { id: 0, text: "Ukrycie spacji" },
                    { id: 1, text: "Brak zawijania tekstu do nowej linii" },
                    { id: 2, text: "Pogrubienie" },
                    { id: 3, text: "Kursywę" }
                ],
                goodAnswer: 1
            },
            {
                id: 187,
                title: "W SQL 'UNION' służy do:",
                answers: [
                    { id: 0, text: "Mnożenia wyników" },
                    { id: 1, text: "Łączenia wyników dwóch zapytań SELECT" },
                    { id: 2, text: "Usuwania" },
                    { id: 3, text: "Grupowania" }
                ],
                goodAnswer: 1
            },
            {
                id: 188,
                title: "W JS 'prompt()' zwraca:",
                answers: [
                    { id: 0, text: "Liczbę" },
                    { id: 1, text: "String (tekst) lub null" },
                    { id: 2, text: "Boolean" },
                    { id: 3, text: "Obiekt" }
                ],
                goodAnswer: 1
            },
            {
                id: 189,
                title: "W PHP funkcja 'strlen()' zwraca:",
                answers: [
                    { id: 0, text: "Słowa" },
                    { id: 1, text: "Długość ciągu znaków" },
                    { id: 2, text: "Wielkie litery" },
                    { id: 3, text: "Błędy" }
                ],
                goodAnswer: 1
            },
            {
                id: 190,
                title: "Czym jest 'favicon'?",
                answers: [
                    { id: 0, text: "Dużym zdjęciem" },
                    { id: 1, text: "Małą ikonką widoczną na karcie przeglądarki" },
                    { id: 2, text: "Skryptem" },
                    { id: 3, text: "Stylem" }
                ],
                goodAnswer: 1
            },
            {
                id: 191,
                title: "W CSS 'box-shadow' dodaje:",
                answers: [
                    { id: 0, text: "Margines" },
                    { id: 1, text: "Cień wokół elementu" },
                    { id: 2, text: "Obramowanie" },
                    { id: 3, text: "Kolor" }
                ],
                goodAnswer: 1
            },
            {
                id: 192,
                title: "W SQL 'AUTO_INCREMENT' to:",
                answers: [
                    { id: 0, text: "Ręczne wpisywanie" },
                    { id: 1, text: "Automatyczne zwiększanie wartości (np. ID)" },
                    { id: 2, text: "Sortowanie" },
                    { id: 3, text: "Usuwania" }
                ],
                goodAnswer: 1
            },
            {
                id: 193,
                title: "W JS '===' nazywany jest operatorem:",
                answers: [
                    { id: 0, text: "Przypisania" },
                    { id: 1, text: "Ścisłej równości" },
                    { id: 2, text: "Logiki" },
                    { id: 3, text: "Różności" }
                ],
                goodAnswer: 1
            },
            {
                id: 194,
                title: "W PHP '$_REQUEST' zawiera dane z:",
                answers: [
                    { id: 0, text: "Tylko GET" },
                    { id: 1, text: "GET, POST i COOKIE" },
                    { id: 2, text: "Tylko SESSION" },
                    { id: 3, text: "Bazy danych" }
                ],
                goodAnswer: 1
            },
            {
                id: 195,
                title: "Który znacznik HTML definiuje najważniejszy nagłówek?",
                answers: [
                    { id: 0, text: "<h6>" },
                    { id: 1, text: "<h1>" },
                    { id: 2, text: "<head>" },
                    { id: 3, text: "<header>" }
                ],
                goodAnswer: 1
            },
            {
                id: 196,
                title: "W CSS 'text-decoration: underline' to:",
                answers: [
                    { id: 0, text: "Pogrubienie" },
                    { id: 1, text: "Podkreślenie" },
                    { id: 2, text: "Przekreślenie" },
                    { id: 3, text: "Nadkreślenie" }
                ],
                goodAnswer: 1
            },
            {
                id: 197,
                title: "W SQL 'DATABASE()' zwraca:",
                answers: [
                    { id: 0, text: "Wszystkie bazy" },
                    { id: 1, text: "Nazwę bieżącej bazy danych" },
                    { id: 2, text: "Wersję" },
                    { id: 3, text: "Użytkownika" }
                ],
                goodAnswer: 1
            },
            {
                id: 198,
                title: "W JS 'event.preventDefault()' służy do:",
                answers: [
                    { id: 0, text: "Wywołania błędu" },
                    { id: 1, text: "Zatrzymania domyślnej akcji zdarzenia" },
                    { id: 2, text: "Odświeżenia" },
                    { id: 3, text: "Wysłania danych" }
                ],
                goodAnswer: 1
            },
            {
                id: 199,
                title: "W PHP 'echo' i 'print' służą do:",
                answers: [
                    { id: 0, text: "Obliczeń" },
                    { id: 1, text: "Wyświetlania tekstu na stronie" },
                    { id: 2, text: "Łączenia z DB" },
                    { id: 3, text: "Pętli" }
                ],
                goodAnswer: 1
            },
            {
                id: 200,
                title: "Skrót WWW oznacza:",
                answers: [
                    { id: 0, text: "Web Wide World" },
                    { id: 1, text: "World Wide Web" },
                    { id: 2, text: "World Web Wide" },
                    { id: 3, text: "Wide World Web" }
                ],
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