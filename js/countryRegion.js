$(function () {
    var region_lang = "ar";
    var get = new Gettext({ 'domain' : region_lang});
    var countries = {
        "AX": {
            "code": "AX",
            "name": "\u00c5land\u202c\u200f",
            "en_name": "\u00c5land Islands",
            "ar_name": "\u062c\u0632\u0631 \u0623\u0648\u0644\u0627\u0646 ",
            "calling_code": "358"
        }, 
        "AL": {
            "code": "AL",
            "name": "Shqip\u00ebria\u202c\u200f",
            "en_name": "Albania",
            "ar_name": "\u0623\u0644\u0628\u0627\u0646\u064a\u0627 ",
            "calling_code": "355"
        },
        "DZ": {
            "code": "DZ",
            "name": "\u0627\u0644\u062c\u0632\u0627\u0626\u0631",
            "en_name": "Algeria",
            "ar_name": "\u0627\u0644\u062c\u0632\u0627\u0626\u0631",
            "calling_code": "213"
        },
        "AS": {
            "code": "AS",
            "name": "American Samoa\u202c\u200f",
            "en_name": "American Samoa",
            "ar_name": "\u0633\u0627\u0645\u0648\u0627 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629 ",
            "calling_code": "1 684"
        },
        "AD": {
            "code": "AD",
            "name": "Andorra\u202c\u200f",
            "en_name": "Andorra",
            "ar_name": "\u0623\u0646\u062f\u0648\u0631\u0627 ",
            "calling_code": "376"
        },
        "AO": {
            "code": "AO",
            "name": "Angola\u202c\u200f",
            "en_name": "Angola",
            "ar_name": "\u0623\u0646\u063a\u0648\u0644\u0627 ",
            "calling_code": "244"
        },
        "AI": {
            "code": "AI",
            "name": "Anguilla\u202c\u200f",
            "en_name": "Anguilla",
            "ar_name": "\u0623\u0646\u063a\u0648\u064a\u0644\u0627 ",
            "calling_code": "1 264"
        },
        "AQ": {
            "code": "AQ",
            "name": "Antarctica\u202c\u200f",
            "en_name": "Antarctica",
            "ar_name": "\u0623\u0646\u062a\u0627\u0631\u0643\u062a\u064a\u0643\u0627 ",
            "calling_code": "672"
        },
        "AG": {
            "code": "AG",
            "name": "Antigua and Barbuda\u202c\u200f",
            "en_name": "Antigua and Barbuda",
            "ar_name": "\u0623\u0646\u062a\u064a\u063a\u0648\u0627 \u0648\u0628\u0631\u0628\u0648\u062f\u0627 ",
            "calling_code": "1 268"
        },
        "AR": {
            "code": "AR",
            "name": "Argentina\u202c\u200f",
            "en_name": "Argentina",
            "ar_name": "\u0627\u0644\u0623\u0631\u062c\u0646\u062a\u064a\u0646 ",
            "calling_code": "54"
        },
        "AM": {
            "code": "AM",
            "name": "\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576\u202c\u200f",
            "en_name": "Armenia",
            "ar_name": "\u0623\u0631\u0645\u064a\u0646\u064a\u0627 ",
            "calling_code": "374"
        },
        "AW": {
            "code": "AW",
            "name": "Aruba\u202c\u200f",
            "en_name": "Aruba",
            "ar_name": "\u0622\u0631\u0648\u0628\u0627 ",
            "calling_code": "297"
        },
        "AU": {
            "code": "AU",
            "name": "Australia\u202c\u200f",
            "en_name": "Australia",
            "ar_name": "\u0623\u0633\u062a\u0631\u0627\u0644\u064a\u0627 ",
            "calling_code": "61"
        },
        "AT": {
            "code": "AT",
            "name": "\u00d6sterreich\u202c\u200f",
            "en_name": "Austria",
            "ar_name": "\u0627\u0644\u0646\u0645\u0633\u0627 ",
            "calling_code": "43"
        },
        "AZ": {
            "code": "AZ",
            "name": "Az\u0259rbaycan\u202c\u200f",
            "en_name": "Azerbaijan",
            "ar_name": "\u0623\u0630\u0631\u0628\u064a\u062c\u0627\u0646 ",
            "calling_code": "994"
        },
        "BS": {
            "code": "BS",
            "name": "Bahamas\u202c\u200f",
            "en_name": "Bahamas",
            "ar_name": "\u0627\u0644\u0628\u0627\u0647\u0627\u0645\u0627 ",
            "calling_code": "1 242"
        },
        "BH": {
            "code": "BH",
            "name": "\u0627\u0644\u0628\u062d\u0631\u064a\u0646",
            "en_name": "Bahrain",
            "ar_name": "\u0627\u0644\u0628\u062d\u0631\u064a\u0646",
            "calling_code": "973"
        },
        "BD": {
            "code": "BD",
            "name": "\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6\u202c\u200f",
            "en_name": "Bangladesh",
            "ar_name": "\u0628\u0646\u062c\u0644\u0627\u062f\u064a\u0634 ",
            "calling_code": "880"
        },
        "BB": {
            "code": "BB",
            "name": "Barbados\u202c\u200f",
            "en_name": "Barbados",
            "ar_name": "\u0628\u0631\u0628\u0627\u062f\u0648\u0633 ",
            "calling_code": "1 246"
        },
        "BY": {
            "code": "BY",
            "name": "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c\u202c\u200f",
            "en_name": "Belarus",
            "ar_name": "بيلاروسيا",
            "calling_code": "375"
        },
        "BE": {
            "code": "BE",
            "name": "Belgi\u00eb\u202c\u200f",
            "en_name": "Belgium",
            "ar_name": "\u0628\u0644\u062c\u064a\u0643\u0627 ",
            "calling_code": "32"
        },
        "BZ": {
            "code": "BZ",
            "name": "Belize\u202c\u200f",
            "en_name": "Belize",
            "ar_name": "\u0628\u0644\u064a\u0632 ",
            "calling_code": "501"
        },
        "BJ": {
            "code": "BJ",
            "name": "B\u00e9nin\u202c\u200f",
            "en_name": "Benin",
            "ar_name": "\u0628\u0646\u064a\u0646 ",
            "calling_code": "229"
        },
        "BM": {
            "code": "BM",
            "name": "Bermuda\u202c\u200f",
            "en_name": "Bermuda",
            "ar_name": "\u0628\u0631\u0645\u0648\u062f\u0627 ",
            "calling_code": "1 441"
        },
        "BT": {
            "code": "BT",
            "name": "\u0f60\u0f56\u0fb2\u0f74\u0f42\u202c\u200f",
            "en_name": "Bhutan",
            "ar_name": "\u0628\u0648\u062a\u0627\u0646 ",
            "calling_code": "975"
        },
        "BO": {
            "code": "BO",
            "name": "Bolivia\u202c\u200f",
            "en_name": "Bolivia",
            "ar_name": "\u0628\u0648\u0644\u064a\u0641\u064a\u0627 ",
            "calling_code": "591"
        },
        "BQ": {
            "code": "BQ",
            "name": "Caribbean Netherlands\u202c\u200f",
            "en_name": "Caribbean Netherlands",
            "ar_name": "\u0647\u0648\u0644\u0646\u062f\u0627 \u0627\u0644\u0643\u0627\u0631\u064a\u0628\u064a\u0629 ",
            "calling_code": "599"
        },
        "BA": {
            "code": "BA",
            "name": "\u0411\u043e\u0441\u043d\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430\u202c\u200f",
            "en_name": "Bosnia and Herzegovina",
            "ar_name": "\u0627\u0644\u0628\u0648\u0633\u0646\u0629 \u0648\u0627\u0644\u0647\u0631\u0633\u0643 ",
            "calling_code": "387"
        },
        "BW": {
            "code": "BW",
            "name": "Botswana\u202c\u200f",
            "en_name": "Botswana",
            "ar_name": "\u0628\u062a\u0633\u0648\u0627\u0646\u0627 ",
            "calling_code": "267"
        },
        "BR": {
            "code": "BR",
            "name": "Brasil\u202c\u200f",
            "en_name": "Brazil",
            "ar_name": "\u0627\u0644\u0628\u0631\u0627\u0632\u064a\u0644 ",
            "calling_code": "55"
        },
        "IO": {
            "code": "IO",
            "name": "British Indian Ocean Territory\u202c\u200f",
            "en_name": "British Indian Ocean Territory",
            "ar_name": "\u0627\u0644\u0625\u0642\u0644\u064a\u0645 \u0627\u0644\u0628\u0631\u064a\u0637\u0627\u0646\u064a \u0641\u064a \u0627\u0644\u0645\u062d\u064a\u0637 \u0627\u0644\u0647\u0646\u062f\u064a ",
            "calling_code": "246"
        },
        "BN": {
            "code": "BN",
            "name": "Brunei\u202c\u200f",
            "en_name": "Brunei",
            "ar_name": "\u0628\u0631\u0648\u0646\u0627\u064a ",
            "calling_code": "673"
        },
        "BG": {
            "code": "BG",
            "name": "\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f\u202c\u200f",
            "en_name": "Bulgaria",
            "ar_name": "\u0628\u0644\u063a\u0627\u0631\u064a\u0627 ",
            "calling_code": "359"
        },
        "BF": {
            "code": "BF",
            "name": "Burkina Faso\u202c\u200f",
            "en_name": "Burkina Faso",
            "ar_name": "\u0628\u0648\u0631\u0643\u064a\u0646\u0627 \u0641\u0627\u0633\u0648 ",
            "calling_code": "226"
        },
        "BI": {
            "code": "BI",
            "name": "Uburundi\u202c\u200f",
            "en_name": "Burundi",
            "ar_name": "\u0628\u0648\u0631\u0648\u0646\u062f\u064a ",
            "calling_code": "257"
        },
        "KH": {
            "code": "KH",
            "name": "\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u202c\u200f",
            "en_name": "Cambodia",
            "ar_name": "\u0643\u0645\u0628\u0648\u062f\u064a\u0627 ",
            "calling_code": "855"
        },
        "CM": {
            "code": "CM",
            "name": "Cameroun\u202c\u200f",
            "en_name": "Cameroon",
            "ar_name": "\u0627\u0644\u0643\u0627\u0645\u064a\u0631\u0648\u0646 ",
            "calling_code": "237"
        },
        "CA": {
            "code": "CA",
            "name": "Canada\u202c\u200f",
            "en_name": "Canada",
            "ar_name": "\u0643\u0646\u062f\u0627 ",
            "calling_code": "1"
        },
        "CV": {
            "code": "CV",
            "name": "Kabu Verdi\u202c\u200f",
            "en_name": "Cape Verde",
            "ar_name": "\u0627\u0644\u0631\u0623\u0633 \u0627\u0644\u0623\u062e\u0636\u0631 ",
            "calling_code": "238"
        },
        "KY": {
            "code": "KY",
            "name": "Cayman Islands\u202c\u200f",
            "en_name": "Cayman Islands",
            "ar_name": "\u062c\u0632\u0631 \u0627\u0644\u0643\u0627\u064a\u0645\u0646 ",
            "calling_code": "1 345"
        },
        "CF": {
            "code": "CF",
            "name": "R\u00e9publique centrafricaine\u202c\u200f",
            "en_name": "Central African Republic",
            "ar_name": "\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0623\u0641\u0631\u064a\u0642\u064a\u0627 \u0627\u0644\u0648\u0633\u0637\u0649 ",
            "calling_code": "236"
        },
        "TD": {
            "code": "TD",
            "name": "Tchad\u202c\u200f",
            "en_name": "Chad",
            "ar_name": "\u062a\u0634\u0627\u062f ",
            "calling_code": "235"
        },
        "CL": {
            "code": "CL",
            "name": "Chile\u202c\u200f",
            "en_name": "Chile",
            "ar_name": "\u0634\u064a\u0644\u064a ",
            "calling_code": "56"
        },
        "CN": {
            "code": "CN",
            "name": "\u4e2d\u56fd\u202c\u200f",
            "en_name": "China",
            "ar_name": "\u0627\u0644\u0635\u064a\u0646 ",
            "calling_code": "86"
        },
        "CX": {
            "code": "CX",
            "name": "Christmas Island\u202c\u200f",
            "en_name": "Christmas Island",
            "ar_name": "\u062c\u0632\u064a\u0631\u0629 \u0627\u0644\u0643\u0631\u064a\u0633\u0645\u0627\u0633 ",
            "calling_code": "61"
        },
        "CC": {
            "code": "CC",
            "name": "Cocos [Keeling] Islands\u202c\u200f",
            "en_name": "Cocos [Keeling] Islands",
            "ar_name": "\u062c\u0632\u0631 \u0643\u0648\u0643\u0648\u0633 ",
            "calling_code": "61"
        },
        "CO": {
            "code": "CO",
            "name": "Colombia\u202c\u200f",
            "en_name": "Colombia",
            "ar_name": "\u0643\u0648\u0644\u0648\u0645\u0628\u064a\u0627 ",
            "calling_code": "57"
        },
        "KM": {
            "code": "KM",
            "name": "\u062c\u0632\u0631 \u0627\u0644\u0642\u0645\u0631",
            "en_name": "Comoros",
            "ar_name": "\u062c\u0632\u0631 \u0627\u0644\u0642\u0645\u0631",
            "calling_code": "269"
        },
        "CG": {
            "code": "CG",
            "name": "Congo-Brazzaville\u202c\u200f",
            "en_name": "Congo [Republic]",
            "ar_name": "\u0627\u0644\u0643\u0648\u0646\u063a\u0648 - \u0628\u0631\u0627\u0632\u0627\u0641\u064a\u0644 ",
            "calling_code": "242"
        },
        "CD": {
            "code": "CD",
            "name": "Jamhuri ya Kidemokrasia ya Kongo\u202c\u200f",
            "en_name": "Congo [DRC]",
            "ar_name": "\u0627\u0644\u0643\u0648\u0646\u063a\u0648 - \u0643\u064a\u0646\u0634\u0627\u0633\u0627 ",
            "calling_code": "243"
        },
        "CK": {
            "code": "CK",
            "name": "Cook Islands\u202c\u200f",
            "en_name": "Cook Islands",
            "ar_name": "\u062c\u0632\u0631 \u0643\u0648\u0643 ",
            "calling_code": "682"
        },
        "CR": {
            "code": "CR",
            "name": "Costa Rica\u202c\u200f",
            "en_name": "Costa Rica",
            "ar_name": "\u0643\u0648\u0633\u062a\u0627\u0631\u064a\u0643\u0627 ",
            "calling_code": "506"
        },
        "CI": {
            "code": "CI",
            "name": "C\u00f4te d\u2019Ivoire\u202c\u200f",
            "en_name": "C\u00f4te d\u2019Ivoire",
            "ar_name": "\u0633\u0627\u062d\u0644 \u0627\u0644\u0639\u0627\u062c ",
            "calling_code": "225"
        },
        "HR": {
            "code": "HR",
            "name": "Hrvatska\u202c\u200f",
            "en_name": "Croatia",
            "ar_name": "\u0643\u0631\u0648\u0627\u062a\u064a\u0627 ",
            "calling_code": "385"
        },
        "CU": {
            "code": "CU",
            "name": "Cuba\u202c\u200f",
            "en_name": "Cuba",
            "ar_name": "\u0643\u0648\u0628\u0627 ",
            "calling_code": "53"
        },
        "CW": {
            "code": "CW",
            "name": "Cura\u00e7ao\u202c\u200f",
            "en_name": "Cura\u00e7ao",
            "ar_name": "\u0643\u0648\u0631\u0627\u0633\u0627\u0648 ",
            "calling_code": "599 9"
        },
        "CY": {
            "code": "CY",
            "name": "\u039a\u03cd\u03c0\u03c1\u03bf\u03c2\u202c\u200f",
            "en_name": "Cyprus",
            "ar_name": "\u0642\u0628\u0631\u0635 ",
            "calling_code": "357"
        },
        "CZ": {
            "code": "CZ",
            "name": "\u010cesk\u00e1 republika\u202c\u200f",
            "en_name": "Czech Republic",
            "ar_name": "\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0627\u0644\u062a\u0634\u064a\u0643 ",
            "calling_code": "420"
        },
        "DK": {
            "code": "DK",
            "name": "Danmark\u202c\u200f",
            "en_name": "Denmark",
            "ar_name": "الدانمارك",
            "calling_code": "45"
        },
        "DJ": {
            "code": "DJ",
            "name": "Djibouti\u202c\u200f",
            "en_name": "Djibouti",
            "ar_name": "\u062c\u064a\u0628\u0648\u062a\u064a ",
            "calling_code": "253"
        },
        "DM": {
            "code": "DM",
            "name": "Dominica\u202c\u200f",
            "en_name": "Dominica",
            "ar_name": "\u062f\u0648\u0645\u064a\u0646\u064a\u0643\u0627 ",
            "calling_code": "1 767"
        },
        "DO": {
            "code": "DO",
            "name": "Rep\u00fablica Dominicana\u202c\u200f",
            "en_name": "Dominican Republic",
            "ar_name": "\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0627\u0644\u062f\u0648\u0645\u064a\u0646\u064a\u0643 ",
            "calling_code": "1 809"
        },
        "EC": {
            "code": "EC",
            "name": "Ecuador\u202c\u200f",
            "en_name": "Ecuador",
            "ar_name": "\u0627\u0644\u0625\u0643\u0648\u0627\u062f\u0648\u0631 ",
            "calling_code": "593"
        },
        "EG": {
            "code": "EG",
            "name": "\u0645\u0635\u0631",
            "en_name": "Egypt",
            "ar_name": "\u0645\u0635\u0631",
            "calling_code": "20"
        },
        "SV": {
            "code": "SV",
            "name": "El Salvador\u202c\u200f",
            "en_name": "El Salvador",
            "ar_name": "\u0627\u0644\u0633\u0644\u0641\u0627\u062f\u0648\u0631 ",
            "calling_code": "503"
        },
        "GQ": {
            "code": "GQ",
            "name": "Guinea Ecuatorial\u202c\u200f",
            "en_name": "Equatorial Guinea",
            "ar_name": "\u063a\u064a\u0646\u064a\u0627 \u0627\u0644\u0625\u0633\u062a\u0648\u0627\u0626\u064a\u0629 ",
            "calling_code": "240"
        },
        "ER": {
            "code": "ER",
            "name": "Eritrea\u202c\u200f",
            "en_name": "Eritrea",
            "ar_name": "أريتيريا",
            "calling_code": "291"
        },
        "EE": {
            "code": "EE",
            "name": "Eesti\u202c\u200f",
            "en_name": "Estonia",
            "ar_name": "\u0623\u0633\u062a\u0648\u0646\u064a\u0627 ",
            "calling_code": "372"
        },
        "ET": {
            "code": "ET",
            "name": "Ethiopia\u202c\u200f",
            "en_name": "Ethiopia",
            "ar_name": "\u0625\u062b\u064a\u0648\u0628\u064a\u0627 ",
            "calling_code": "251"
        },
        "FK": {
            "code": "FK",
            "name": "Falkland Islands [Islas Malvinas]\u202c\u200f",
            "en_name": "Falkland Islands [Islas Malvinas]",
            "ar_name": "\u062c\u0632\u0631 \u0641\u0648\u0643\u0644\u0627\u0646\u062f ",
            "calling_code": "500"
        },
        "FO": {
            "code": "FO",
            "name": "F\u00f8royar\u202c\u200f",
            "en_name": "Faroe Islands",
            "ar_name": "\u062c\u0632\u0631 \u0641\u0627\u0631\u0648 ",
            "calling_code": "298"
        },
        "FJ": {
            "code": "FJ",
            "name": "Fiji\u202c\u200f",
            "en_name": "Fiji",
            "ar_name": "\u0641\u064a\u062c\u064a ",
            "calling_code": "679"
        },
        "FI": {
            "code": "FI",
            "name": "Suomi\u202c\u200f",
            "en_name": "Finland",
            "ar_name": "\u0641\u0646\u0644\u0646\u062f\u0627 ",
            "calling_code": "358"
        },
        "FR": {
            "code": "FR",
            "name": "France\u202c\u200f",
            "en_name": "France",
            "ar_name": "\u0641\u0631\u0646\u0633\u0627 ",
            "calling_code": "33"
        },
        "GF": {
            "code": "GF",
            "name": "Guyane fran\u00e7aise\u202c\u200f",
            "en_name": "French Guiana",
            "ar_name": "\u063a\u0648\u064a\u0627\u0646\u0627 \u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629 ",
            "calling_code": null
        },
        "PF": {
            "code": "PF",
            "name": "Polyn\u00e9sie fran\u00e7aise\u202c\u200f",
            "en_name": "French Polynesia",
            "ar_name": "\u0628\u0648\u0644\u064a\u0646\u064a\u0632\u064a\u0627 \u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629 ",
            "calling_code": "689"
        },
        "TF": {
            "code": "TF",
            "name": "Terres australes fran\u00e7aises\u202c\u200f",
            "en_name": "French Southern Territories",
            "ar_name": "\u0627\u0644\u0645\u0642\u0627\u0637\u0639\u0627\u062a \u0627\u0644\u062c\u0646\u0648\u0628\u064a\u0629 \u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629 ",
            "calling_code": null
        },
        "GA": {
            "code": "GA",
            "name": "Gabon\u202c\u200f",
            "en_name": "Gabon",
            "ar_name": "\u0627\u0644\u062c\u0627\u0628\u0648\u0646 ",
            "calling_code": "241"
        },
        "GM": {
            "code": "GM",
            "name": "Gambia\u202c\u200f",
            "en_name": "Gambia",
            "ar_name": "\u063a\u0627\u0645\u0628\u064a\u0627 ",
            "calling_code": "220"
        },
        "GE": {
            "code": "GE",
            "name": "\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd\u202c\u200f",
            "en_name": "Georgia",
            "ar_name": "\u062c\u0648\u0631\u062c\u064a\u0627 ",
            "calling_code": "995"
        },
        "DE": {
            "code": "DE",
            "name": "Deutschland\u202c\u200f",
            "en_name": "Germany",
            "ar_name": "\u0623\u0644\u0645\u0627\u0646\u064a\u0627 ",
            "calling_code": "49"
        },
        "GH": {
            "code": "GH",
            "name": "Gaana\u202c\u200f",
            "en_name": "Ghana",
            "ar_name": "\u063a\u0627\u0646\u0627 ",
            "calling_code": "233"
        },
        "GI": {
            "code": "GI",
            "name": "Gibraltar\u202c\u200f",
            "en_name": "Gibraltar",
            "ar_name": "\u062c\u0628\u0644 \u0637\u0627\u0631\u0642 ",
            "calling_code": "350"
        },
        "GR": {
            "code": "GR",
            "name": "\u0395\u03bb\u03bb\u03ac\u03b4\u03b1\u202c\u200f",
            "en_name": "Greece",
            "ar_name": "\u0627\u0644\u064a\u0648\u0646\u0627\u0646 ",
            "calling_code": "30"
        },
        "GL": {
            "code": "GL",
            "name": "Kalaallit Nunaat\u202c\u200f",
            "en_name": "Greenland",
            "ar_name": "\u063a\u0631\u064a\u0646\u0644\u0627\u0646\u062f ",
            "calling_code": "299"
        },
        "GD": {
            "code": "GD",
            "name": "Grenada\u202c\u200f",
            "en_name": "Grenada",
            "ar_name": "\u063a\u0631\u064a\u0646\u0627\u062f\u0627 ",
            "calling_code": "1 473"
        },
        "GP": {
            "code": "GP",
            "name": "Guadeloupe\u202c\u200f",
            "en_name": "Guadeloupe",
            "ar_name": "\u062c\u0648\u0627\u062f\u0644\u0648\u0628 ",
            "calling_code": null
        },
        "GU": {
            "code": "GU",
            "name": "Guam\u202c\u200f",
            "en_name": "Guam",
            "ar_name": "\u063a\u0648\u0627\u0645 ",
            "calling_code": "1 671"
        },
        "GT": {
            "code": "GT",
            "name": "Guatemala\u202c\u200f",
            "en_name": "Guatemala",
            "ar_name": "\u063a\u0648\u0627\u062a\u064a\u0645\u0627\u0644\u0627 ",
            "calling_code": "502"
        },
        "GG": {
            "code": "GG",
            "name": "Guernsey\u202c\u200f",
            "en_name": "Guernsey",
            "ar_name": "\u063a\u064a\u0631\u0646\u0632\u064a ",
            "calling_code": "44"
        },
        "GN": {
            "code": "GN",
            "name": "Guin\u00e9e\u202c\u200f",
            "en_name": "Guinea",
            "ar_name": "\u063a\u064a\u0646\u064a\u0627 ",
            "calling_code": "224"
        },
        "GW": {
            "code": "GW",
            "name": "Guin\u00e9 Bissau\u202c\u200f",
            "en_name": "Guinea-Bissau",
            "ar_name": "\u063a\u064a\u0646\u064a\u0627 \u0628\u064a\u0633\u0627\u0648 ",
            "calling_code": "245"
        },
        "GY": {
            "code": "GY",
            "name": "Guyana\u202c\u200f",
            "en_name": "Guyana",
            "ar_name": "\u063a\u064a\u0627\u0646\u0627 ",
            "calling_code": "592"
        },
        "HT": {
            "code": "HT",
            "name": "Haiti\u202c\u200f",
            "en_name": "Haiti",
            "ar_name": "\u0647\u0627\u064a\u062a\u064a ",
            "calling_code": "509"
        },
        "VA": {
            "code": "VA",
            "name": "Citt\u00e0 del Vaticano\u202c\u200f",
            "en_name": "Vatican City",
            "ar_name": "\u0627\u0644\u0641\u0627\u062a\u064a\u0643\u0627\u0646 ",
            "calling_code": "39"
        },
        "HN": {
            "code": "HN",
            "name": "Honduras\u202c\u200f",
            "en_name": "Honduras",
            "ar_name": "\u0647\u0646\u062f\u0648\u0631\u0627\u0633 ",
            "calling_code": "504"
        },
        "HK": {
            "code": "HK",
            "name": "\u9999\u6e2f\u202c\u200f",
            "en_name": "Hong Kong",
            "ar_name": "\u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a ",
            "calling_code": "852"
        },
        "HU": {
            "code": "HU",
            "name": "Magyarorsz\u00e1g\u202c\u200f",
            "en_name": "Hungary",
            "ar_name": "\u0647\u0646\u063a\u0627\u0631\u064a\u0627 ",
            "calling_code": "36"
        },
        "IS": {
            "code": "IS",
            "name": "\u00cdsland\u202c\u200f",
            "en_name": "Iceland",
            "ar_name": "\u0623\u064a\u0633\u0644\u0646\u062f\u0627 ",
            "calling_code": "354"
        },
        "IN": {
            "code": "IN",
            "name": "\u092d\u093e\u0930\u0924\u202c\u200f",
            "en_name": "India",
            "ar_name": "\u0627\u0644\u0647\u0646\u062f ",
            "calling_code": "91"
        },
        "ID": {
            "code": "ID",
            "name": "Indonesia\u202c\u200f",
            "en_name": "Indonesia",
            "ar_name": "\u0623\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627 ",
            "calling_code": "62"
        },
        "IR": {
            "code": "IR",
            "name": "\u0625\u064a\u0631\u0627\u0646",
            "en_name": "Iran",
            "ar_name": "إيران",
            "calling_code": "98"
        },
        "IQ": {
            "code": "IQ",
            "name": "\u0627\u0644\u0639\u0631\u0627\u0642",
            "en_name": "Iraq",
            "ar_name": "\u0627\u0644\u0639\u0631\u0627\u0642",
            "calling_code": "964"
        },
        "IE": {
            "code": "IE",
            "name": "Ireland\u202c\u200f",
            "en_name": "Ireland",
            "ar_name": "\u0623\u064a\u0631\u0644\u0646\u062f\u0627 ",
            "calling_code": "353"
        },
        "IM": {
            "code": "IM",
            "name": "Isle of Man\u202c\u200f",
            "en_name": "Isle of Man",
            "ar_name": "\u062c\u0632\u064a\u0631\u0629 \u0645\u0627\u0646 ",
            "calling_code": "44"
        },
        "IT": {
            "code": "IT",
            "name": "Italia\u202c\u200f",
            "en_name": "Italy",
            "ar_name": "\u0625\u064a\u0637\u0627\u0644\u064a\u0627 ",
            "calling_code": "39"
        },
        "JM": {
            "code": "JM",
            "name": "Jamaica\u202c\u200f",
            "en_name": "Jamaica",
            "ar_name": "\u062c\u0627\u0645\u0627\u064a\u0643\u0627 ",
            "calling_code": "1 876"
        },
        "JP": {
            "code": "JP",
            "name": "\u65e5\u672c\u202c\u200f",
            "en_name": "Japan",
            "ar_name": "\u0627\u0644\u064a\u0627\u0628\u0627\u0646 ",
            "calling_code": "81"
        },
        "JE": {
            "code": "JE",
            "name": "Jersey\u202c\u200f",
            "en_name": "Jersey",
            "ar_name": "\u062c\u064a\u0631\u0633\u064a ",
            "calling_code": "44"
        },
        "JO": {
            "code": "JO",
            "name": "\u0627\u0644\u0623\u0631\u062f\u0646",
            "en_name": "Jordan",
            "ar_name": "\u0627\u0644\u0623\u0631\u062f\u0646",
            "calling_code": "962"
        },
        "KZ": {
            "code": "KZ",
            "name": "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u202c\u200f",
            "en_name": "Kazakhstan",
            "ar_name": "\u0643\u0627\u0632\u0627\u062e\u0633\u062a\u0627\u0646 ",
            "calling_code": "7"
        },
        "KE": {
            "code": "KE",
            "name": "Kenya\u202c\u200f",
            "en_name": "Kenya",
            "ar_name": "\u0643\u064a\u0646\u064a\u0627 ",
            "calling_code": "254"
        },
        "KI": {
            "code": "KI",
            "name": "Kiribati\u202c\u200f",
            "en_name": "Kiribati",
            "ar_name": "\u0643\u064a\u0631\u064a\u0628\u0627\u062a\u064a ",
            "calling_code": "686"
        },
        "KP": {
            "code": "KP",
            "name": "\uc870\uc120 \ubbfc\uc8fc\uc8fc\uc758 \uc778\ubbfc \uacf5\ud654\uad6d\u202c\u200f",
            "en_name": "North Korea",
            "ar_name": "\u0643\u0648\u0631\u064a\u0627 \u0627\u0644\u0634\u0645\u0627\u0644\u064a\u0629 ",
            "calling_code": "850"
        },
        "KR": {
            "code": "KR",
            "name": "\ub300\ud55c\ubbfc\uad6d\u202c\u200f",
            "en_name": "South Korea",
            "ar_name": "\u0643\u0648\u0631\u064a\u0627 \u0627\u0644\u062c\u0646\u0648\u0628\u064a\u0629 ",
            "calling_code": "82"
        },
        "KW": {
            "code": "KW",
            "name": "\u0627\u0644\u0643\u0648\u064a\u062a",
            "en_name": "Kuwait",
            "ar_name": "\u0627\u0644\u0643\u0648\u064a\u062a",
            "calling_code": "965"
        },
        "KG": {
            "code": "KG",
            "name": "Kyrgyzstan\u202c\u200f",
            "en_name": "Kyrgyzstan",
            "ar_name": "\u0642\u0631\u063a\u064a\u0632\u0633\u062a\u0627\u0646 ",
            "calling_code": "996"
        },
        "LA": {
            "code": "LA",
            "name": "\u0eaa.\u0e9b.\u0e9b \u0ea5\u0eb2\u0ea7\u202c\u200f",
            "en_name": "Laos",
            "ar_name": "\u0644\u0627\u0648\u0633 ",
            "calling_code": "856"
        },
        "LV": {
            "code": "LV",
            "name": "Latvija\u202c\u200f",
            "en_name": "Latvia",
            "ar_name": "\u0644\u0627\u062a\u0641\u064a\u0627 ",
            "calling_code": "371"
        },
        "LB": {
            "code": "LB",
            "name": "\u0644\u0628\u0646\u0627\u0646",
            "en_name": "Lebanon",
            "ar_name": "\u0644\u0628\u0646\u0627\u0646",
            "calling_code": "961"
        },
        "LS": {
            "code": "LS",
            "name": "Lesotho\u202c\u200f",
            "en_name": "Lesotho",
            "ar_name": "\u0644\u064a\u0633\u0648\u062a\u0648 ",
            "calling_code": "266"
        },
        "LR": {
            "code": "LR",
            "name": "Liberia\u202c\u200f",
            "en_name": "Liberia",
            "ar_name": "\u0644\u064a\u0628\u064a\u0631\u064a\u0627 ",
            "calling_code": "231"
        },
        "LY": {
            "code": "LY",
            "name": "\u0644\u064a\u0628\u064a\u0627",
            "en_name": "Libya",
            "ar_name": "\u0644\u064a\u0628\u064a\u0627",
            "calling_code": "218"
        },
        "LI": {
            "code": "LI",
            "name": "Liechtenstein\u202c\u200f",
            "en_name": "Liechtenstein",
            "ar_name": "\u0644\u064a\u062e\u062a\u0646\u0634\u062a\u0627\u064a\u0646 ",
            "calling_code": "423"
        },
        "LT": {
            "code": "LT",
            "name": "Lietuva\u202c\u200f",
            "en_name": "Lithuania",
            "ar_name": "\u0644\u064a\u062a\u0648\u0627\u0646\u064a\u0627 ",
            "calling_code": "370"
        },
        "LU": {
            "code": "LU",
            "name": "Luxembourg\u202c\u200f",
            "en_name": "Luxembourg",
            "ar_name": "\u0644\u0648\u0643\u0633\u0645\u0628\u0648\u0631\u063a ",
            "calling_code": "352"
        },
        "MO": {
            "code": "MO",
            "name": "\u6fb3\u9580\u202c\u200f",
            "en_name": "Macau",
            "ar_name": "\u0645\u0643\u0627\u0648 ",
            "calling_code": "853"
        },
        "MK": {
            "code": "MK",
            "name": "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430\u202c\u200f",
            "en_name": "Macedonia [FYROM]",
            "ar_name": "\u0645\u0642\u062f\u0648\u0646\u064a\u0627 ",
            "calling_code": "389"
        },
        "MG": {
            "code": "MG",
            "name": "Madagasikara\u202c\u200f",
            "en_name": "Madagascar",
            "ar_name": "\u0645\u062f\u063a\u0634\u0642\u0631 ",
            "calling_code": "261"
        },
        "MW": {
            "code": "MW",
            "name": "Malawi\u202c\u200f",
            "en_name": "Malawi",
            "ar_name": "\u0645\u0644\u0627\u0648\u064a ",
            "calling_code": "265"
        },
        "MY": {
            "code": "MY",
            "name": "Malaysia\u202c\u200f",
            "en_name": "Malaysia",
            "ar_name": "\u0645\u0627\u0644\u064a\u0632\u064a\u0627 ",
            "calling_code": "60"
        },
        "MV": {
            "code": "MV",
            "name": "Maldives\u202c\u200f",
            "en_name": "Maldives",
            "ar_name": "\u062c\u0632\u0631 \u0627\u0644\u0645\u0627\u0644\u062f\u064a\u0641 ",
            "calling_code": "960"
        },
        "ML": {
            "code": "ML",
            "name": "Mali\u202c\u200f",
            "en_name": "Mali",
            "ar_name": "\u0645\u0627\u0644\u064a ",
            "calling_code": "223"
        },
        "MT": {
            "code": "MT",
            "name": "Malta\u202c\u200f",
            "en_name": "Malta",
            "ar_name": "\u0645\u0627\u0644\u0637\u0627 ",
            "calling_code": "356"
        },
        "MH": {
            "code": "MH",
            "name": "Marshall Islands\u202c\u200f",
            "en_name": "Marshall Islands",
            "ar_name": "\u062c\u0632\u0631 \u0627\u0644\u0645\u0627\u0631\u0634\u0627\u0644 ",
            "calling_code": "692"
        },
        "MQ": {
            "code": "MQ",
            "name": "Martinique\u202c\u200f",
            "en_name": "Martinique",
            "ar_name": "\u0645\u0627\u0631\u062a\u064a\u0646\u064a\u0643 ",
            "calling_code": "596"
        },
        "MR": {
            "code": "MR",
            "name": "\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627",
            "en_name": "Mauritania",
            "ar_name": "\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627",
            "calling_code": "222"
        },
        "MU": {
            "code": "MU",
            "name": "Moris\u202c\u200f",
            "en_name": "Mauritius",
            "ar_name": "\u0645\u0648\u0631\u064a\u0634\u064a\u0648\u0633 ",
            "calling_code": "230"
        },
        "YT": {
            "code": "YT",
            "name": "Mayotte\u202c\u200f",
            "en_name": "Mayotte",
            "ar_name": "\u0645\u0627\u064a\u0648\u062a ",
            "calling_code": "262"
        },
        "MX": {
            "code": "MX",
            "name": "M\u00e9xico\u202c\u200f",
            "en_name": "Mexico",
            "ar_name": "\u0627\u0644\u0645\u0643\u0633\u064a\u0643 ",
            "calling_code": "52"
        },
        "FM": {
            "code": "FM",
            "name": "Micronesia\u202c\u200f",
            "en_name": "Micronesia",
            "ar_name": "\u0645\u064a\u0643\u0631\u0648\u0646\u064a\u0632\u064a\u0627 ",
            "calling_code": "691"
        },
        "MD": {
            "code": "MD",
            "name": "Republica Moldova\u202c\u200f",
            "en_name": "Moldova",
            "ar_name": "\u0645\u0648\u0644\u062f\u0627\u0641\u064a\u0627 ",
            "calling_code": "373"
        },
        "MC": {
            "code": "MC",
            "name": "Monaco\u202c\u200f",
            "en_name": "Monaco",
            "ar_name": "\u0645\u0648\u0646\u0627\u0643\u0648 ",
            "calling_code": "377"
        },
        "MN": {
            "code": "MN",
            "name": "\u041c\u043e\u043d\u0433\u043e\u043b\u202c\u200f",
            "en_name": "Mongolia",
            "ar_name": "\u0645\u0646\u063a\u0648\u0644\u064a\u0627 ",
            "calling_code": "976"
        },
        "ME": {
            "code": "ME",
            "name": "Crna Gora\u202c\u200f",
            "en_name": "Montenegro",
            "ar_name": "\u0627\u0644\u062c\u0628\u0644 \u0627\u0644\u0623\u0633\u0648\u062f ",
            "calling_code": "382"
        },
        "MS": {
            "code": "MS",
            "name": "Montserrat\u202c\u200f",
            "en_name": "Montserrat",
            "ar_name": "\u0645\u0648\u0646\u062a\u0633\u0631\u0627\u062a ",
            "calling_code": "1 664"
        },
        "MA": {
            "code": "MA",
            "name": "\u0627\u0644\u0645\u063a\u0631\u0628",
            "en_name": "Morocco",
            "ar_name": "\u0627\u0644\u0645\u063a\u0631\u0628",
            "calling_code": "212"
        },
        "MZ": {
            "code": "MZ",
            "name": "Mo\u00e7ambique\u202c\u200f",
            "en_name": "Mozambique",
            "ar_name": "\u0645\u0648\u0632\u0645\u0628\u064a\u0642 ",
            "calling_code": "258"
        },
        "MM": {
            "code": "MM",
            "name": "\u1019\u103c\u1014\u103a\u1019\u102c\u202c\u200f",
            "en_name": "Myanmar [Burma]",
            "ar_name": "\u0645\u064a\u0627\u0646\u0645\u0627\u0631 -\u0628\u0648\u0631\u0645\u0627 ",
            "calling_code": "95"
        },
        "NA": {
            "code": "NA",
            "name": "Namibia\u202c\u200f",
            "en_name": "Namibia",
            "ar_name": "\u0646\u0627\u0645\u064a\u0628\u064a\u0627 ",
            "calling_code": "264"
        },
        "NR": {
            "code": "NR",
            "name": "Nauru\u202c\u200f",
            "en_name": "Nauru",
            "ar_name": "\u0646\u0627\u0648\u0631\u0648 ",
            "calling_code": "674"
        },
        "NP": {
            "code": "NP",
            "name": "\u0928\u0947\u092a\u093e\u0932\u202c\u200f",
            "en_name": "Nepal",
            "ar_name": "\u0646\u064a\u0628\u0627\u0644 ",
            "calling_code": "977"
        },
        "NL": {
            "code": "NL",
            "name": "Nederland\u202c\u200f",
            "en_name": "Netherlands",
            "ar_name": "\u0647\u0648\u0644\u0646\u062f\u0627 ",
            "calling_code": "31"
        },
        "NC": {
            "code": "NC",
            "name": "Nouvelle-Cal\u00e9donie\u202c\u200f",
            "en_name": "New Caledonia",
            "ar_name": "\u0643\u0627\u0644\u064a\u062f\u0648\u0646\u064a\u0627 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 ",
            "calling_code": "687"
        },
        "NZ": {
            "code": "NZ",
            "name": "New Zealand\u202c\u200f",
            "en_name": "New Zealand",
            "ar_name": "\u0646\u064a\u0648\u0632\u064a\u0644\u0627\u0646\u062f\u0627 ",
            "calling_code": "64"
        },
        "NI": {
            "code": "NI",
            "name": "Nicaragua\u202c\u200f",
            "en_name": "Nicaragua",
            "ar_name": "\u0646\u064a\u0643\u0627\u0631\u0627\u063a\u0648\u0627 ",
            "calling_code": "505"
        },
        "NE": {
            "code": "NE",
            "name": "Nijar\u202c\u200f",
            "en_name": "Niger",
            "ar_name": "\u0627\u0644\u0646\u064a\u062c\u0631 ",
            "calling_code": "227"
        },
        "NG": {
            "code": "NG",
            "name": "Nigeria\u202c\u200f",
            "en_name": "Nigeria",
            "ar_name": "\u0646\u064a\u062c\u064a\u0631\u064a\u0627 ",
            "calling_code": "234"
        },
        "NU": {
            "code": "NU",
            "name": "Niue\u202c\u200f",
            "en_name": "Niue",
            "ar_name": "\u0646\u064a\u0648\u064a ",
            "calling_code": "683"
        },
        "NF": {
            "code": "NF",
            "name": "Norfolk Island\u202c\u200f",
            "en_name": "Norfolk Island",
            "ar_name": "\u062c\u0632\u064a\u0631\u0629 \u0646\u0648\u0631\u0641\u0648\u0643 ",
            "calling_code": "672"
        },
        "MP": {
            "code": "MP",
            "name": "Northern Mariana Islands\u202c\u200f",
            "en_name": "Northern Mariana Islands",
            "ar_name": "\u062c\u0632\u0631 \u0645\u0627\u0631\u064a\u0627\u0646\u0627 \u0627\u0644\u0634\u0645\u0627\u0644\u064a\u0629 ",
            "calling_code": "1 670"
        },
        "NO": {
            "code": "NO",
            "name": "Norge\u202c\u200f",
            "en_name": "Norway",
            "ar_name": "\u0627\u0644\u0646\u0631\u0648\u064a\u062c ",
            "calling_code": "47"
        },
        "OM": {
            "code": "OM",
            "name": "\u0639\u0645\u0627\u0646",
            "en_name": "Oman",
            "ar_name": "\u0639\u0645\u0627\u0646",
            "calling_code": "968"
        },
        "PK": {
            "code": "PK",
            "name": "\u067e\u0627\u06a9\u0633\u062a\u0627\u0646",
            "en_name": "Pakistan",
            "ar_name": "\u0628\u0627\u0643\u0633\u062a\u0627\u0646",
            "calling_code": "92"
        },
        "PW": {
            "code": "PW",
            "name": "Palau\u202c\u200f",
            "en_name": "Palau",
            "ar_name": "\u0628\u0627\u0644\u0627\u0648 ",
            "calling_code": "680"
        },
        "PS": {
            "code": "PS",
            "name": "\u0641\u0644\u0633\u0637\u064a\u0646",
            "en_name": "Palestine",
            "ar_name": "\u0641\u0644\u0633\u0637\u064a\u0646",
            "calling_code": "970"
        },
        "PA": {
            "code": "PA",
            "name": "Panam\u00e1\u202c\u200f",
            "en_name": "Panama",
            "ar_name": "\u0628\u0646\u0645\u0627 ",
            "calling_code": "507"
        },
        "PG": {
            "code": "PG",
            "name": "Papua New Guinea\u202c\u200f",
            "en_name": "Papua New Guinea",
            "ar_name": "\u0628\u0627\u0628\u0648\u0627 \u063a\u064a\u0646\u064a\u0627 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 ",
            "calling_code": "675"
        },
        "PY": {
            "code": "PY",
            "name": "Paraguay\u202c\u200f",
            "en_name": "Paraguay",
            "ar_name": "\u0628\u0627\u0631\u0627\u063a\u0648\u0627\u064a ",
            "calling_code": "595"
        },
        "PE": {
            "code": "PE",
            "name": "Per\u00fa\u202c\u200f",
            "en_name": "Peru",
            "ar_name": "\u0628\u064a\u0631\u0648 ",
            "calling_code": "51"
        },
        "PH": {
            "code": "PH",
            "name": "Philippines\u202c\u200f",
            "en_name": "Philippines",
            "ar_name": "\u0627\u0644\u0641\u064a\u0644\u0628\u064a\u0646 ",
            "calling_code": "63"
        },
        "PN": {
            "code": "PN",
            "name": "Pitcairn Islands\u202c\u200f",
            "en_name": "Pitcairn Islands",
            "ar_name": "\u062c\u0632\u0631 \u0628\u064a\u062a\u0643\u064a\u0631\u0646 ",
            "calling_code": "870"
        },
        "PL": {
            "code": "PL",
            "name": "Polska\u202c\u200f",
            "en_name": "Poland",
            "ar_name": "\u0628\u0648\u0644\u0646\u062f\u0627 ",
            "calling_code": "48"
        },
        "PT": {
            "code": "PT",
            "name": "Portugal\u202c\u200f",
            "en_name": "Portugal",
            "ar_name": "\u0627\u0644\u0628\u0631\u062a\u063a\u0627\u0644 ",
            "calling_code": "351"
        },
        "PR": {
            "code": "PR",
            "name": "Puerto Rico\u202c\u200f",
            "en_name": "Puerto Rico",
            "ar_name": "\u0628\u0648\u0631\u062a\u0648\u0631\u064a\u0643\u0648 ",
            "calling_code": "1 787"
        },
        "QA": {
            "code": "QA",
            "name": "\u0642\u0637\u0631",
            "en_name": "Qatar",
            "ar_name": "\u0642\u0637\u0631",
            "calling_code": "974"
        },
        "RE": {
            "code": "RE",
            "name": "R\u00e9union\u202c\u200f",
            "en_name": "R\u00e9union",
            "ar_name": "\u0631\u0648\u064a\u0646\u064a\u0648\u0646 ",
            "calling_code": null
        },
        "RO": {
            "code": "RO",
            "name": "Rom\u00e2nia\u202c\u200f",
            "en_name": "Romania",
            "ar_name": "\u0631\u0648\u0645\u0627\u0646\u064a\u0627 ",
            "calling_code": "40"
        },
        "RU": {
            "code": "RU",
            "name": "\u0420\u043e\u0441\u0441\u0438\u044f\u202c\u200f",
            "en_name": "Russia",
            "ar_name": "\u0631\u0648\u0633\u064a\u0627 ",
            "calling_code": "7"
        },
        "RW": {
            "code": "RW",
            "name": "Rwanda\u202c\u200f",
            "en_name": "Rwanda",
            "ar_name": "\u0631\u0648\u0627\u0646\u062f\u0627 ",
            "calling_code": "250"
        },
        "BL": {
            "code": "BL",
            "name": "Saint-Barth\u00e9l\u00e9my\u202c\u200f",
            "en_name": "Saint Barth\u00e9lemy",
            "ar_name": "\u0633\u0627\u0646 \u0628\u0627\u0631\u062a\u0644\u064a\u0645\u064a ",
            "calling_code": "590"
        },
        "SH": {
            "code": "SH",
            "name": "Saint Helena\u202c\u200f",
            "en_name": "Saint Helena",
            "ar_name": "\u0633\u0627\u0646\u062a \u0647\u064a\u0644\u0646\u0627 ",
            "calling_code": "290"
        },
        "KN": {
            "code": "KN",
            "name": "Saint Kitts and Nevis\u202c\u200f",
            "en_name": "Saint Kitts and Nevis",
            "ar_name": "\u0633\u0627\u0646\u062a \u0643\u064a\u062a\u0633 \u0648\u0646\u064a\u0641\u064a\u0633 ",
            "calling_code": "1 869"
        },
        "LC": {
            "code": "LC",
            "name": "Saint Lucia\u202c\u200f",
            "en_name": "Saint Lucia",
            "ar_name": "\u0633\u0627\u0646\u062a \u0644\u0648\u0633\u064a\u0627 ",
            "calling_code": "1 758"
        },
        "MF": {
            "code": "MF",
            "name": "Saint-Martin [partie fran\u00e7aise]\u202c\u200f",
            "en_name": "Saint Martin",
            "ar_name": "\u0633\u0627\u0646\u062a \u0645\u0627\u0631\u062a\u0646 ",
            "calling_code": "1 599"
        },
        "PM": {
            "code": "PM",
            "name": "Saint-Pierre-et-Miquelon\u202c\u200f",
            "en_name": "Saint Pierre and Miquelon",
            "ar_name": "\u0633\u0627\u0646\u062a \u0628\u064a\u064a\u0631 \u0648\u0645\u064a\u0643\u0648\u0644\u0648\u0646 ",
            "calling_code": "508"
        },
        "VC": {
            "code": "VC",
            "name": "Saint Vincent and the Grenadines\u202c\u200f",
            "en_name": "Saint Vincent and the Grenadines",
            "ar_name": "\u0633\u0627\u0646\u062a \u0641\u0646\u0633\u0646\u062a \u0648\u063a\u0631\u0646\u0627\u062f\u064a\u0646 ",
            "calling_code": "1784"
        },
        "WS": {
            "code": "WS",
            "name": "Samoa\u202c\u200f",
            "en_name": "Samoa",
            "ar_name": "\u0633\u0627\u0645\u0648\u0627 ",
            "calling_code": "685"
        },
        "SM": {
            "code": "SM",
            "name": "San Marino\u202c\u200f",
            "en_name": "San Marino",
            "ar_name": "\u0633\u0627\u0646 \u0645\u0627\u0631\u064a\u0646\u0648 ",
            "calling_code": "378"
        },
        "ST": {
            "code": "ST",
            "name": "S\u00e3o Tom\u00e9 e Pr\u00edncipe\u202c\u200f",
            "en_name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
            "ar_name": "\u0633\u0627\u0648 \u062a\u0648\u0645\u064a \u0648\u0628\u0631\u064a\u0646\u0633\u064a\u0628\u064a ",
            "calling_code": "239"
        },
        "SA": {
            "code": "SA",
            "name": "\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629",
            "en_name": "Saudi Arabia",
            "ar_name": "السعودية",
            "calling_code": "966"
        },
        "SN": {
            "code": "SN",
            "name": "S\u00e9n\u00e9gal\u202c\u200f",
            "en_name": "Senegal",
            "ar_name": "\u0627\u0644\u0633\u0646\u063a\u0627\u0644 ",
            "calling_code": "221"
        },
        "RS": {
            "code": "RS",
            "name": "\u0421\u0440\u0431\u0438\u0458\u0430\u202c\u200f",
            "en_name": "Serbia",
            "ar_name": "\u0635\u0631\u0628\u064a\u0627 ",
            "calling_code": "381"
        },
        "SC": {
            "code": "SC",
            "name": "Seychelles\u202c\u200f",
            "en_name": "Seychelles",
            "ar_name": "\u0633\u064a\u0634\u0644 ",
            "calling_code": "248"
        },
        "SL": {
            "code": "SL",
            "name": "Sierra Leone\u202c\u200f",
            "en_name": "Sierra Leone",
            "ar_name": "\u0633\u064a\u0631\u0627\u0644\u064a\u0648\u0646 ",
            "calling_code": "232"
        },
        "SG": {
            "code": "SG",
            "name": "Singapore\u202c\u200f",
            "en_name": "Singapore",
            "ar_name": "\u0633\u0646\u063a\u0627\u0641\u0648\u0631\u0629 ",
            "calling_code": "65"
        },
        "SX": {
            "code": "SX",
            "name": "Sint Maarten\u202c\u200f",
            "en_name": "Sint Maarten",
            "ar_name": "\u0633\u064a\u0646\u062a \u0645\u0627\u0631\u062a\u0646 ",
            "calling_code": "1 721"
        },
        "SK": {
            "code": "SK",
            "name": "Slovensko\u202c\u200f",
            "en_name": "Slovakia",
            "ar_name": "\u0633\u0644\u0648\u0641\u0627\u0643\u064a\u0627 ",
            "calling_code": "421"
        },
        "SI": {
            "code": "SI",
            "name": "Slovenija\u202c\u200f",
            "en_name": "Slovenia",
            "ar_name": "\u0633\u0644\u0648\u0641\u064a\u0646\u064a\u0627 ",
            "calling_code": "386"
        },
        "SB": {
            "code": "SB",
            "name": "Solomon Islands\u202c\u200f",
            "en_name": "Solomon Islands",
            "ar_name": "\u062c\u0632\u0631 \u0633\u0644\u064a\u0645\u0627\u0646 ",
            "calling_code": "677"
        },
        "SO": {
            "code": "SO",
            "name": "Soomaaliya\u202c\u200f",
            "en_name": "Somalia",
            "ar_name": "\u0627\u0644\u0635\u0648\u0645\u0627\u0644 ",
            "calling_code": "252"
        },
        "ZA": {
            "code": "ZA",
            "name": "South Africa\u202c\u200f",
            "en_name": "South Africa",
            "ar_name": "\u062c\u0646\u0648\u0628 \u0623\u0641\u0631\u064a\u0642\u064a\u0627 ",
            "calling_code": "27"
        },
        "GS": {
            "code": "GS",
            "name": "South Georgia and the South Sandwich Islands\u202c\u200f",
            "en_name": "South Georgia and the South Sandwich Islands",
            "ar_name": "\u062c\u0648\u0631\u062c\u064a\u0627 \u0627\u0644\u062c\u0646\u0648\u0628\u064a\u0629 \u0648\u062c\u0632\u0631 \u0633\u0627\u0646\u062f\u0648\u064a\u062a\u0634 \u0627\u0644\u062c\u0646\u0648\u0628\u064a\u0629 ",
            "calling_code": null
        },
        "SS": {
            "code": "SS",
            "name": "\u062c\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062f\u0627\u0646",
            "en_name": "South Sudan",
            "ar_name": "\u062c\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062f\u0627\u0646",
            "calling_code": "211"
        },
        "ES": {
            "code": "ES",
            "name": "Espa\u00f1a\u202c\u200f",
            "en_name": "Spain",
            "ar_name": "\u0625\u0633\u0628\u0627\u0646\u064a\u0627 ",
            "calling_code": "34"
        },
        "LK": {
            "code": "LK",
            "name": "\u0dc1\u0dca\u200d\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0\u202c\u200f",
            "en_name": "Sri Lanka",
            "ar_name": "\u0633\u0631\u064a\u0644\u0627\u0646\u0643\u0627 ",
            "calling_code": "94"
        },
        "SD": {
            "code": "SD",
            "name": "\u0627\u0644\u0633\u0648\u062f\u0627\u0646",
            "en_name": "Sudan",
            "ar_name": "\u0627\u0644\u0633\u0648\u062f\u0627\u0646",
            "calling_code": "249"
        },
        "SR": {
            "code": "SR",
            "name": "Suriname\u202c\u200f",
            "en_name": "Suriname",
            "ar_name": "\u0633\u0648\u0631\u064a\u0646\u0627\u0645 ",
            "calling_code": "597"
        },
        "SJ": {
            "code": "SJ",
            "name": "Svalbard og Jan Mayen\u202c\u200f",
            "en_name": "Svalbard and Jan Mayen",
            "ar_name": "\u0633\u0641\u0627\u0644\u0628\u0627\u0631\u062f \u0648\u062c\u0627\u0646 \u0645\u0627\u064a\u0627\u0646 ",
            "calling_code": null
        },
        "SZ": {
            "code": "SZ",
            "name": "Swaziland\u202c\u200f",
            "en_name": "Swaziland",
            "ar_name": "\u0633\u0648\u0627\u0632\u064a\u0644\u0627\u0646\u062f ",
            "calling_code": "268"
        },
        "SE": {
            "code": "SE",
            "name": "Sverige\u202c\u200f",
            "en_name": "Sweden",
            "ar_name": "\u0627\u0644\u0633\u0648\u064a\u062f ",
            "calling_code": "46"
        },
        "CH": {
            "code": "CH",
            "name": "Schweiz\u202c\u200f",
            "en_name": "Switzerland",
            "ar_name": "\u0633\u0648\u064a\u0633\u0631\u0627 ",
            "calling_code": "41"
        },
        "SY": {
            "code": "SY",
            "name": "\u0633\u0648\u0631\u064a\u0627",
            "en_name": "Syria",
            "ar_name": "\u0633\u0648\u0631\u064a\u0627",
            "calling_code": "963"
        },
        "TW": {
            "code": "TW",
            "name": "\u53f0\u7063\u202c\u200f",
            "en_name": "Taiwan",
            "ar_name": "\u062a\u0627\u064a\u0648\u0627\u0646 ",
            "calling_code": "886"
        },
        "TJ": {
            "code": "TJ",
            "name": "Tajikistan\u202c\u200f",
            "en_name": "Tajikistan",
            "ar_name": "\u0637\u0627\u062c\u0643\u0633\u062a\u0627\u0646 ",
            "calling_code": "992"
        },
        "TZ": {
            "code": "TZ",
            "name": "Tanzania\u202c\u200f",
            "en_name": "Tanzania",
            "ar_name": "\u062a\u0627\u0646\u0632\u0627\u0646\u064a\u0627 ",
            "calling_code": "255"
        },
        "TH": {
            "code": "TH",
            "name": "\u0e44\u0e17\u0e22\u202c\u200f",
            "en_name": "Thailand",
            "ar_name": "\u062a\u0627\u064a\u0644\u0646\u062f ",
            "calling_code": "66"
        },
        "TL": {
            "code": "TL",
            "name": "Timor-Leste\u202c\u200f",
            "en_name": "Timor-Leste",
            "ar_name": "\u062a\u064a\u0645\u0648\u0631 \u0627\u0644\u0634\u0631\u0642\u064a\u0629 ",
            "calling_code": "670"
        },
        "TG": {
            "code": "TG",
            "name": "Togo\u202c\u200f",
            "en_name": "Togo",
            "ar_name": "\u062a\u0648\u062c\u0648 ",
            "calling_code": "228"
        },
        "TK": {
            "code": "TK",
            "name": "Tokelau\u202c\u200f",
            "en_name": "Tokelau",
            "ar_name": "\u062a\u0648\u0643\u064a\u0644\u0648 ",
            "calling_code": "690"
        },
        "TO": {
            "code": "TO",
            "name": "Tonga\u202c\u200f",
            "en_name": "Tonga",
            "ar_name": "\u062a\u0648\u0646\u063a\u0627 ",
            "calling_code": "676"
        },
        "TT": {
            "code": "TT",
            "name": "Trinidad and Tobago\u202c\u200f",
            "en_name": "Trinidad and Tobago",
            "ar_name": "\u062a\u0631\u064a\u0646\u064a\u062f\u0627\u062f \u0648\u062a\u0648\u0628\u0627\u063a\u0648 ",
            "calling_code": "1 868"
        },
        "TN": {
            "code": "TN",
            "name": "\u062a\u0648\u0646\u0633",
            "en_name": "Tunisia",
            "ar_name": "\u062a\u0648\u0646\u0633",
            "calling_code": "216"
        },
        "TR": {
            "code": "TR",
            "name": "T\u00fcrkiye\u202c\u200f",
            "en_name": "Turkey",
            "ar_name": "\u062a\u0631\u0643\u064a\u0627 ",
            "calling_code": "90"
        },
        "TM": {
            "code": "TM",
            "name": "Turkmenistan\u202c\u200f",
            "en_name": "Turkmenistan",
            "ar_name": "\u062a\u0631\u0643\u0645\u0627\u0646\u0633\u062a\u0627\u0646 ",
            "calling_code": "993"
        },
        "TC": {
            "code": "TC",
            "name": "Turks and Caicos Islands\u202c\u200f",
            "en_name": "Turks and Caicos Islands",
            "ar_name": "\u062c\u0632\u0631 \u0627\u0644\u062a\u0631\u0643 \u0648\u062c\u0627\u064a\u0643\u0648\u0633 ",
            "calling_code": "1 649"
        },
        "TV": {
            "code": "TV",
            "name": "Tuvalu\u202c\u200f",
            "en_name": "Tuvalu",
            "ar_name": "\u062a\u0648\u0641\u0627\u0644\u0648 ",
            "calling_code": "688"
        },
        "UG": {
            "code": "UG",
            "name": "Uganda\u202c\u200f",
            "en_name": "Uganda",
            "ar_name": "\u0623\u0648\u063a\u0646\u062f\u0627 ",
            "calling_code": "256"
        },
        "UA": {
            "code": "UA",
            "name": "\u0423\u043a\u0440\u0430\u0457\u043d\u0430\u202c\u200f",
            "en_name": "Ukraine",
            "ar_name": "\u0623\u0648\u0643\u0631\u0627\u0646\u064a\u0627 ",
            "calling_code": "380"
        },
        "AE": {
            "code": "AE",
            "name": "\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629",
            "en_name": "United Arab Emirates",
            "ar_name": "الإمارات",
            "calling_code": "971"
        },
        "GB": {
            "code": "GB",
            "name": "United Kingdom\u202c\u200f",
            "en_name": "United Kingdom",
            "ar_name": "بريطانيا",
            "calling_code": "44"
        },
        "US": {
            "code": "US",
            "name": "United States\u202c\u200f",
            "en_name": "United States",
            "ar_name": "أميركا",
            "calling_code": "1"
        },
        "UM": {
            "code": "UM",
            "name": "U.S. Outlying Islands\u202c\u200f",
            "en_name": "U.S. Outlying Islands",
            "ar_name": "\u062c\u0632\u0631 \u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0628\u0639\u064a\u062f\u0629 \u0627\u0644\u0635\u063a\u064a\u0631\u0629 ",
            "calling_code": null
        },
        "UY": {
            "code": "UY",
            "name": "Uruguay\u202c\u200f",
            "en_name": "Uruguay",
            "ar_name": "\u0623\u0648\u0631\u063a\u0648\u0627\u064a ",
            "calling_code": "598"
        },
        "UZ": {
            "code": "UZ",
            "name": "\u040e\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u043e\u043d\u202c\u200f",
            "en_name": "Uzbekistan",
            "ar_name": "\u0623\u0648\u0632\u0628\u0643\u0633\u062a\u0627\u0646 ",
            "calling_code": "998"
        },
        "VU": {
            "code": "VU",
            "name": "Vanuatu\u202c\u200f",
            "en_name": "Vanuatu",
            "ar_name": "\u0641\u0627\u0646\u0648\u0627\u062a\u0648 ",
            "calling_code": "678"
        },
        "VE": {
            "code": "VE",
            "name": "Venezuela\u202c\u200f",
            "en_name": "Venezuela",
            "ar_name": "\u0641\u0646\u0632\u0648\u064a\u0644\u0627 ",
            "calling_code": "58"
        },
        "VN": {
            "code": "VN",
            "name": "Vi\u1ec7t Nam\u202c\u200f",
            "en_name": "Vietnam",
            "ar_name": "\u0641\u064a\u062a\u0646\u0627\u0645 ",
            "calling_code": "84"
        },
        "VG": {
            "code": "VG",
            "name": "British Virgin Islands\u202c\u200f",
            "en_name": "British Virgin Islands",
            "ar_name": "\u062c\u0632\u0631 \u0641\u0631\u062c\u064a\u0646 \u0627\u0644\u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0629 ",
            "calling_code": "1 284"
        },
        "VI": {
            "code": "VI",
            "name": "U.S. Virgin Islands\u202c\u200f",
            "en_name": "U.S. Virgin Islands",
            "ar_name": "\u062c\u0632\u0631 \u0641\u0631\u062c\u064a\u0646 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629 ",
            "calling_code": "1 340"
        },
        "WF": {
            "code": "WF",
            "name": "Wallis and Futuna\u202c\u200f",
            "en_name": "Wallis and Futuna",
            "ar_name": "\u062c\u0632\u0631 \u0648\u0627\u0644\u0633 \u0648\u0641\u0648\u062a\u0648\u0646\u0627 ",
            "calling_code": "681"
        },
        "EH": {
            "code": "EH",
            "name": "\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629",
            "en_name": "Western Sahara",
            "ar_name": "\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629",
            "calling_code": "212"
        },
        "YE": {
            "code": "YE",
            "name": "\u0627\u0644\u064a\u0645\u0646",
            "en_name": "Yemen",
            "ar_name": "\u0627\u0644\u064a\u0645\u0646",
            "calling_code": "967"
        },
        "ZM": {
            "code": "ZM",
            "name": "Zambia\u202c\u200f",
            "en_name": "Zambia",
            "ar_name": "\u0632\u0627\u0645\u0628\u064a\u0627 ",
            "calling_code": "260"
        },
        "ZW": {
            "code": "ZW",
            "name": "Zimbabwe\u202c\u200f",
            "en_name": "Zimbabwe",
            "ar_name": "\u0632\u064a\u0645\u0628\u0627\u0628\u0648\u064a ",
            "calling_code": "263"
        },
        "AF": {
            "code": "AF",
            "name": "Afghanistan",
            "en_name": "Afghanistan",
            "ar_name": "أفغانستان",
            "calling_code": ""
        },
        "RU_DA": {
            "code": "RU-DA",
            "name": "Dagestan",
            "en_name": "Dagestan",
            "ar_name": "داغستان",
            "calling_code": ""
        }
    }

    //region data by country
    var ru_da_region=["Makhachkala_RU-DA","Achisu_RU-DA","Alburikent_RU-DA","Bavtugay_RU-DA","Belidzhi_RU-DA","Buynaksk_RU-DA","Khasavyurt_RU-DA","Dagestanskiye Ogni_RU-DA","Derbent_RU-DA","Dubki_RU-DA","Izberbash_RU-DA","Yuzhno-Sukhokumsk_RU-DA","Kaspiysk_RU-DA","Kizilyurt_RU-DA","Kizlyar_RU-DA","Kyakhulay_RU-DA","Komsomolsky_RU-DA","Kubachi_RU-DA","Leninkent_RU-DA","Mamedkala_RU-DA","Manas_RU-DA","Novy Kyakhulay_RU-DA","Novy Sulak_RU-DA","Shamkhal_RU-DA","Shamilkala_RU-DA","Semender_RU-DA","Sulak_RU-DA","Tarki_RU-DA","Tyube_RU-DA"];
    var ad_region=["Andorra la Vella_AD","Canillo_AD","Encamp_AD","Escaldes-Engordany_AD","La Massana_AD","Ordino_AD","Sant Julia de Loria_AD"];
    var ae_region=["\'Ajman_AE","Abu Zaby_AE","Al Fujayrah_AE","Ash Shariqah_AE","Dubayy_AE","Ra's al Khaymah_AE","Umm al Qaywayn_AE"];
    var af_region=["Badakhshan_AF","Badghis_AF","Baghlan_AF","Balkh_AF","Bamyan_AF","Daykundi_AF","Farah_AF","Faryab_AF","Ghazni_AF","Ghor_AF","Helmand_AF","Herat_AF","Jowzjan_AF","Kabul_AF","Kandahar_AF","Kapisa_AF","Khost_AF","Kunar_AF","Kunduz_AF","Laghman_AF","Logar_AF","Nangarhar_AF","Nimroz_AF","Nuristan_AF","Paktika_AF","Paktiya_AF","Panjshayr_AF","Parwan_AF","Samangan_AF","Sar-e Pul_AF","Takhar_AF","Uruzgan_AF","Wardak_AF","Zabul_AF"];
    var ag_region=["Barbuda_AG","Redonda_AG","Saint George_AG","Saint John_AG","Saint Mary_AG","Saint Paul_AG","Saint Peter_AG","Saint Philip_AG"];
    var ai_region=["Anguilla_AI"];
    var al_region=["Berat_AL","Diber_AL","Durres_AL","Elbasan_AL","Fier_AL","Gjirokaster_AL","Korce_AL","Kukes_AL","Lezhe_AL","Shkoder_AL","Tirane_AL","Vlore_AL"];
    var am_region=["Aragacotn_AM","Ararat_AM","Armavir_AM","Erevan_AM","Gegark'unik'_AM","Kotayk'_AM","Lori_AM","Sirak_AM","Syunik'_AM","Tavus_AM","Vayoc Jor_AM"];
    var ao_region=["Bengo_AO","Benguela_AO","Bie_AO","Cabinda_AO","Cunene_AO","Huambo_AO","Huila_AO","Kuando Kubango_AO","Kwanza Norte_AO","Kwanza Sul_AO","Luanda_AO","Lunda Norte_AO","Lunda Sul_AO","Malange_AO","Moxico_AO","Namibe_AO","Uige_AO","Zaire_AO"];
    var aq_region=["Antarctica_AQ"];
    var ar_region=["Buenos Aires_AR","Catamarca_AR","Chaco_AR","Chubut_AR","Ciudad Autonoma de Buenos Aires_AR","Cordoba_AR","Corrientes_AR","Entre Rios_AR","Formosa_AR","Jujuy_AR","La Pampa_AR","La Rioja_AR","Mendoza_AR","Misiones_AR","Neuquen_AR","Rio Negro_AR","Salta_AR","San Juan_AR","San Luis_AR","Santa Cruz_AR","Santa Fe_AR","Santiago del Estero_AR","Tierra del Fuego_AR","Tucuman_AR"];
    var as_region=["Eastern District_AS","Western District_AS"];
    var at_region=["Burgenland_AT","Karnten_AT","Niederosterreich_AT","Oberosterreich_AT","Salzburg_AT","Steiermark_AT","Tirol_AT","Vorarlberg_AT","Wien_AT"];
    var au_region=["Australian Capital Territory_AU","New South Wales_AU","Northern Territory_AU","Queensland_AU","South Australia_AU","Tasmania_AU","Victoria_AU","Western Australia_AU"];
    var aw_region=["Aruba_AW"];
    var ax_region=["Eckeroe_AX","Finstroem_AX","Hammarland_AX","Jomala_AX","Lemland_AX","Mariehamn_AX","Saltvik_AX","Sund_AX"];
    var az_region=["Abseron_AZ","Agcabadi_AZ","Agdam_AZ","Agdas_AZ","Agstafa_AZ","Agsu_AZ","Astara_AZ","Baki_AZ","Balakan_AZ","Barda_AZ","Beylaqan_AZ","Bilasuvar_AZ","Cabrayil_AZ","Calilabad_AZ","Daskasan_AZ","Fuzuli_AZ","Gadabay_AZ","Ganca_AZ","Goranboy_AZ","Goycay_AZ","Goygol_AZ","Haciqabul_AZ","Imisli_AZ","Ismayilli_AZ","Kalbacar_AZ","Kurdamir_AZ","Lacin_AZ","Lankaran_AZ","Lerik_AZ","Masalli_AZ","Mingacevir_AZ","Naftalan_AZ","Naxcivan_AZ","Neftcala_AZ","Oguz_AZ","Qabala_AZ","Qax_AZ","Qazax_AZ","Qobustan_AZ","Quba_AZ","Qubadli_AZ","Qusar_AZ","Saatli_AZ","Sabirabad_AZ","Saki_AZ","Salyan_AZ","Samaxi_AZ","Samkir_AZ","Samux_AZ","Sirvan_AZ","Siyazan_AZ","Sumqayit_AZ","Susa_AZ","Tartar_AZ","Tovuz_AZ","Ucar_AZ","Xacmaz_AZ","Xankandi_AZ","Xizi_AZ","Xocali_AZ","Xocavand_AZ","Yardimli_AZ","Yevlax_AZ","Zangilan_AZ","Zaqatala_AZ","Zardab_AZ"];
    var ba_region=["Brcko distrikt_BA","Federacija Bosne i Hercegovine_BA","Republika Srpska_BA"];
    var bb_region=["Christ Church_BB","Saint Andrew_BB","Saint George_BB","Saint James_BB","Saint John_BB","Saint Joseph_BB","Saint Lucy_BB","Saint Michael_BB","Saint Peter_BB","Saint Philip_BB","Saint Thomas_BB"];
    var bd_region=["Barisal_BD","Chittagong_BD","Dhaka_BD","Khulna_BD","Rajshahi_BD","Rangpur_BD","Sylhet_BD"];
    var be_region=["Antwerpen_BE","Brabant wallon_BE","Brussels Hoofdstedelijk Gewest_BE","Hainaut_BE","Liege_BE","Limburg_BE","Luxembourg_BE","Namur_BE","Oost-Vlaanderen_BE","Vlaams-Brabant_BE","West-Vlaanderen_BE"];
    var bf_region=["Bale_BF","Bam_BF","Banwa_BF","Bazega_BF","Bougouriba_BF","Boulgou_BF","Boulkiemde_BF","Comoe_BF","Ganzourgou_BF","Gnagna_BF","Gourma_BF","Houet_BF","Ioba_BF","Kadiogo_BF","Kenedougou_BF","Komondjari_BF","Kompienga_BF","Kossi_BF","Koulpelogo_BF","Kouritenga_BF","Kourweogo_BF","Leraba_BF","Loroum_BF","Mouhoun_BF","Nahouri_BF","Namentenga_BF","Nayala_BF","Noumbiel_BF","Oubritenga_BF","Oudalan_BF","Passore_BF","Poni_BF","Sanguie_BF","Sanmatenga_BF","Seno_BF","Sissili_BF","Soum_BF","Sourou_BF","Tapoa_BF","Tuy_BF","Yagha_BF","Yatenga_BF","Ziro_BF","Zondoma_BF","Zoundweogo_BF"];
    var bg_region=["Blagoevgrad_BG","Burgas_BG","Dobrich_BG","Gabrovo_BG","Haskovo_BG","Kardzhali_BG","Kyustendil_BG","Lovech_BG","Montana_BG","Pazardzhik_BG","Pernik_BG","Pleven_BG","Plovdiv_BG","Razgrad_BG","Ruse_BG","Shumen_BG","Silistra_BG","Sliven_BG","Smolyan_BG","Sofia_BG","Sofia (stolitsa)_BG","Stara Zagora_BG","Targovishte_BG","Varna_BG","Veliko Tarnovo_BG","Vidin_BG","Vratsa_BG","Yambol_BG"];
    var bh_region=["Al 'Asimah_BH","Al Janubiyah_BH","Al Muharraq_BH","Ash Shamaliyah_BH"];
    var bi_region=["Bubanza_BI","Bujumbura Mairie_BI","Bururi_BI","Cankuzo_BI","Cibitoke_BI","Gitega_BI","Karuzi_BI","Kayanza_BI","Kirundo_BI","Makamba_BI","Muramvya_BI","Muyinga_BI","Mwaro_BI","Ngozi_BI","Rutana_BI","Ruyigi_BI"];
    var bj_region=["Alibori_BJ","Atacora_BJ","Atlantique_BJ","Borgou_BJ","Collines_BJ","Couffo_BJ","Donga_BJ","Littoral_BJ","Mono_BJ","Oueme_BJ","Plateau_BJ","Zou_BJ"];
    var bl_region=["Saint Barthelemy_BL"];
    var bm_region=["Hamilton_BM","Saint George_BM"];
    var bn_region=["Belait_BN","Brunei-Muara_BN","Temburong_BN","Tutong_BN"];
    var bo_region=["Chuquisaca_BO","Cochabamba_BO","El Beni_BO","La Paz_BO","Oruro_BO","Pando_BO","Potosi_BO","Santa Cruz_BO","Tarija_BO"];
    var bq_region=["Bonaire_BQ","Saba_BQ","Sint Eustatius_BQ"];
    var br_region=["Acre_BR","Alagoas_BR","Amapa_BR","Amazonas_BR","Bahia_BR","Ceara_BR","Distrito Federal_BR","Espirito Santo_BR","Goias_BR","Maranhao_BR","Mato Grosso_BR","Mato Grosso do Sul_BR","Minas Gerais_BR","Para_BR","Paraiba_BR","Parana_BR","Pernambuco_BR","Piaui_BR","Rio de Janeiro_BR","Rio Grande do Norte_BR","Rio Grande do Sul_BR","Rondonia_BR","Roraima_BR","Santa Catarina_BR","Sao Paulo_BR","Sergipe_BR","Tocantins_BR"];
    var bs_region=["Central Andros_BS","City of Freeport_BS","East Grand Bahama_BS","Harbour Island_BS","Hope Town_BS","Long Island_BS","New Providence_BS","South Eleuthera_BS"];
    var bt_region=["Bumthang_BT","Chhukha_BT","Dagana_BT","Gasa_BT","Haa_BT","Lhuentse_BT","Monggar_BT","Paro_BT","Pemagatshel_BT","Punakha_BT","Samdrup Jongkhar_BT","Samtse_BT","Thimphu_BT","Trashi Yangtse_BT","Trashigang_BT","Trongsa_BT","Tsirang_BT","Wangdue Phodrang_BT","Zhemgang_BT"];
    var bw_region=["Central_BW","Ghanzi_BW","Kgalagadi_BW","Kgatleng_BW","Kweneng_BW","North East_BW","North West_BW","South East_BW","Southern_BW"];
    var by_region=["Brestskaya voblasts'_BY","Homyel'skaya voblasts'_BY","Horad Minsk_BY","Hrodzenskaya voblasts'_BY","Mahilyowskaya voblasts'_BY","Minskaya voblasts'_BY","Vitsyebskaya voblasts'_BY"];
    var bz_region=["Belize_BZ","Cayo_BZ","Corozal_BZ","Orange Walk_BZ","Stann Creek_BZ","Toledo_BZ"];
    var ca_region=["Alberta_CA","British Columbia_CA","Manitoba_CA","New Brunswick_CA","Newfoundland and Labrador_CA","Northwest Territories_CA","Nova Scotia_CA","Nunavut_CA","Ontario_CA","Prince Edward Island_CA","Quebec_CA","Saskatchewan_CA","Yukon_CA"];
    var cc_region=["Cocos (Keeling) Islands_CC"];
    var cd_region=["Bas-Uele_CD","Equateur_CD","Haut-Katanga_CD","Haut-Lomami_CD","Haut-Uele_CD","Ituri_CD","Kasai_CD","Kasai Central_CD","Kasai Oriental_CD","Kinshasa_CD","Kongo Central_CD","Kwango_CD","Kwilu_CD","Lomami_CD","Lualaba_CD","Mai-Ndombe_CD","Maniema_CD","Mongala_CD","Nord-Kivu_CD","Nord-Ubangi_CD","Sankuru_CD","Sud-Kivu_CD","Sud-Ubangi_CD","Tanganyika_CD","Tshopo_CD","Tshuapa_CD"];
    var cf_region=["Bamingui-Bangoran_CF","Bangui_CF","Basse-Kotto_CF","Gribingui_CF","Haut-Mbomou_CF","Haute-Kotto_CF","Kemo-Gribingui_CF","Lobaye_CF","Mambere-Kadei_CF","Mbomou_CF","Nana-Mambere_CF","Ombella-Mpoko_CF","Ouaka_CF","Ouham_CF","Ouham-Pende_CF","Sangha_CF","Vakaga_CF"];
    var cg_region=["Bouenza_CG","Brazzaville_CG","Cuvette_CG","Cuvette-Ouest_CG","Lekoumou_CG","Likouala_CG","Niari_CG","Plateaux_CG","Pointe-Noire_CG","Pool_CG","Sangha_CG"];
    var ch_region=["Aargau_CH","Appenzell Ausserrhoden_CH","Appenzell Innerrhoden_CH","Basel-Landschaft_CH","Basel-Stadt_CH","Bern_CH","Fribourg_CH","Geneve_CH","Glarus_CH","Graubunden_CH","Jura_CH","Luzern_CH","Neuchatel_CH","Nidwalden_CH","Obwalden_CH","Sankt Gallen_CH","Schaffhausen_CH","Schwyz_CH","Solothurn_CH","Thurgau_CH","Ticino_CH","Uri_CH","Valais_CH","Vaud_CH","Zug_CH","Zurich_CH"];
    var ci_region=["Abidjan_CI","Bas-Sassandra_CI","Comoe_CI","Denguele_CI","Goh-Djiboua_CI","Lacs_CI","Lagunes_CI","Montagnes_CI","Sassandra-Marahoue_CI","Savanes_CI","Vallee du Bandama_CI","Woroba_CI","Yamoussoukro_CI","Zanzan_CI"];
    var ck_region=["Cook Islands_CK"];
    var cl_region=["Aisen del General Carlos Ibanez del Campo_CL","Antofagasta_CL","Arica y Parinacota_CL","Atacama_CL","Biobio_CL","Coquimbo_CL","La Araucania_CL","Libertador General Bernardo O'Higgins_CL","Los Lagos_CL","Los Rios_CL","Magallanes_CL","Maule_CL","Region Metropolitana de Santiago_CL","Tarapaca_CL","Valparaiso_CL"];
    var cm_region=["Adamaoua_CM","Centre_CM","Est_CM","Extreme-Nord_CM","Littoral_CM","Nord_CM","Nord-Ouest_CM","Ouest_CM","Sud_CM","Sud-Ouest_CM"];
    var cn_region=["Anhui_CN","Beijing_CN","Chongqing_CN","Fujian_CN","Gansu_CN","Guangdong_CN","Guangxi_CN","Guizhou_CN","Hainan_CN","Hebei_CN","Heilongjiang_CN","Henan_CN","Hubei_CN","Hunan_CN","Jiangsu_CN","Jiangxi_CN","Jilin_CN","Liaoning_CN","Nei Mongol_CN","Ningxia_CN","Qinghai_CN","Shaanxi_CN","Shandong_CN","Shanghai_CN","Shanxi_CN","Sichuan_CN","Tianjin_CN","Xinjiang_CN","Xizang_CN","Yunnan_CN","Zhejiang_CN"];
    var co_region=["Amazonas_CO","Antioquia_CO","Arauca_CO","Atlantico_CO","Bolivar_CO","Boyaca_CO","Caldas_CO","Caqueta_CO","Casanare_CO","Cauca_CO","Cesar_CO","Choco_CO","Cordoba_CO","Cundinamarca_CO","Distrito Capital de Bogota_CO","Guainia_CO","Guaviare_CO","Huila_CO","La Guajira_CO","Magdalena_CO","Meta_CO","Narino_CO","Norte de Santander_CO","Putumayo_CO","Quindio_CO","Risaralda_CO","San Andres, Providencia y Santa Catalina_CO","Santander_CO","Sucre_CO","Tolima_CO","Valle del Cauca_CO","Vaupes_CO","Vichada_CO"];
    var cr_region=["Alajuela_CR","Cartago_CR","Guanacaste_CR","Heredia_CR","Limon_CR","Puntarenas_CR","San Jose_CR"];
    var cu_region=["Artemisa_CU","Camaguey_CU","Ciego de Avila_CU","Cienfuegos_CU","Granma_CU","Guantanamo_CU","Holguin_CU","Isla de la Juventud_CU","La Habana_CU","Las Tunas_CU","Matanzas_CU","Mayabeque_CU","Pinar del Rio_CU","Sancti Spiritus_CU","Santiago de Cuba_CU","Villa Clara_CU"];
    var cv_region=["Boa Vista_CV","Brava_CV","Maio_CV","Mosteiros_CV","Paul_CV","Porto Novo_CV","Praia_CV","Ribeira Brava_CV","Ribeira Grande_CV","Ribeira Grande de Santiago_CV","Sal_CV","Santa Catarina_CV","Santa Catarina do Fogo_CV","Santa Cruz_CV","Sao Domingos_CV","Sao Filipe_CV","Sao Lourenco dos Orgaos_CV","Sao Miguel_CV","Sao Salvador do Mundo_CV","Sao Vicente_CV","Tarrafal_CV","Tarrafal de Sao Nicolau_CV"];
    var cw_region=["Curacao_CW"];
    var cx_region=["Christmas Island_CX"];
    var cy_region=["Ammochostos_CY","Keryneia_CY","Larnaka_CY","Lefkosia_CY","Lemesos_CY","Pafos_CY"];
    var cz_region=["Jihocesky kraj_CZ","Jihomoravsky kraj_CZ","Karlovarsky kraj_CZ","Kraj Vysocina_CZ","Kralovehradecky kraj_CZ","Liberecky kraj_CZ","Moravskoslezsky kraj_CZ","Olomoucky kraj_CZ","Pardubicky kraj_CZ","Plzensky kraj_CZ","Praha, Hlavni mesto_CZ","Stredocesky kraj_CZ","Ustecky kraj_CZ","Zlinsky kraj_CZ"];
    var de_region=["Baden-Wurttemberg_DE","Bayern_DE","Berlin_DE","Brandenburg_DE","Bremen_DE","Hamburg_DE","Hessen_DE","Mecklenburg-Vorpommern_DE","Niedersachsen_DE","Nordrhein-Westfalen_DE","Rheinland-Pfalz_DE","Saarland_DE","Sachsen_DE","Sachsen-Anhalt_DE","Schleswig-Holstein_DE","Thuringen_DE"];
    var dj_region=["Ali Sabieh_DJ","Arta_DJ","Dikhil_DJ","Djibouti_DJ","Obock_DJ","Tadjourah_DJ"];
    var dk_region=["Hovedstaden_DK","Midtjylland_DK","Nordjylland_DK","Sjaelland_DK","Syddanmark_DK"];
    var dm_region=["Saint Andrew_DM","Saint David_DM","Saint George_DM","Saint John_DM","Saint Joseph_DM","Saint Luke_DM","Saint Mark_DM","Saint Patrick_DM","Saint Paul_DM","Saint Peter_DM"];
    var do_region=["Azua_DO","Baoruco_DO","Barahona_DO","Dajabon_DO","Distrito Nacional (Santo Domingo)_DO","Duarte_DO","El Seibo_DO","Elias Pina_DO","Espaillat_DO","Hato Mayor_DO","Hermanas Mirabal_DO","Independencia_DO","La Altagracia_DO","La Romana_DO","La Vega_DO","Maria Trinidad Sanchez_DO","Monsenor Nouel_DO","Monte Cristi_DO","Monte Plata_DO","Pedernales_DO","Peravia_DO","Puerto Plata_DO","Samana_DO","San Cristobal_DO","San Jose de Ocoa_DO","San Juan_DO","San Pedro de Macoris_DO","Sanchez Ramirez_DO","Santiago_DO","Santiago Rodriguez_DO","Valverde_DO"];
    var dz_region=["Adrar_DZ","Ain Defla_DZ","Ain Temouchent_DZ","Alger_DZ","Annaba_DZ","Batna_DZ","Bechar_DZ","Bejaia_DZ","Biskra_DZ","Blida_DZ","Bordj Bou Arreridj_DZ","Bouira_DZ","Boumerdes_DZ","Chlef_DZ","Constantine_DZ","Djelfa_DZ","El Bayadh_DZ","El Oued_DZ","El Tarf_DZ","Ghardaia_DZ","Guelma_DZ","Illizi_DZ","Jijel_DZ","Khenchela_DZ","Laghouat_DZ","M'sila_DZ","Mascara_DZ","Medea_DZ","Mila_DZ","Mostaganem_DZ","Naama_DZ","Oran_DZ","Ouargla_DZ","Oum el Bouaghi_DZ","Relizane_DZ","Saida_DZ","Setif_DZ","Sidi Bel Abbes_DZ","Skikda_DZ","Souk Ahras_DZ","Tamanrasset_DZ","Tebessa_DZ","Tiaret_DZ","Tindouf_DZ","Tipaza_DZ","Tissemsilt_DZ","Tizi Ouzou_DZ","Tlemcen_DZ"];
    var ec_region=["Azuay_EC","Bolivar_EC","Canar_EC","Carchi_EC","Chimborazo_EC","Cotopaxi_EC","El Oro_EC","Esmeraldas_EC","Galapagos_EC","Guayas_EC","Imbabura_EC","Loja_EC","Los Rios_EC","Manabi_EC","Morona Santiago_EC","Napo_EC","Orellana_EC","Pastaza_EC","Pichincha_EC","Santa Elena_EC","Santo Domingo de los Tsachilas_EC","Sucumbios_EC","Tungurahua_EC","Zamora Chinchipe_EC"];
    var ee_region=["Harjumaa_EE","Hiiumaa_EE","Ida-Virumaa_EE","Jarvamaa_EE","Jogevamaa_EE","Laane-Virumaa_EE","Laanemaa_EE","Parnumaa_EE","Polvamaa_EE","Raplamaa_EE","Saaremaa_EE","Tartumaa_EE","Valgamaa_EE","Viljandimaa_EE","Vorumaa_EE"];
    var eg_region=["Ad Daqahliyah_EG","Al Bahr al Ahmar_EG","Al Buhayrah_EG","Al Fayyum_EG","Al Gharbiyah_EG","Al Iskandariyah_EG","Al Isma'iliyah_EG","Al Jizah_EG","Al Minufiyah_EG","Al Minya_EG","Al Qahirah_EG","Al Qalyubiyah_EG","Al Uqsur_EG","Al Wadi al Jadid_EG","As Suways_EG","Ash Sharqiyah_EG","Aswan_EG","Asyut_EG","Bani Suwayf_EG","Bur Sa'id_EG","Dumyat_EG","Janub Sina'_EG","Kafr ash Shaykh_EG","Matruh_EG","Qina_EG","Shamal Sina'_EG","Suhaj_EG"];
    var eh_region=["Western Sahara_EH"];
    var er_region=["Al Awsat_ER","Al Janubi_ER","Ansaba_ER","Janubi al Bahri al Ahmar_ER","Qash-Barkah_ER","Shimali al Bahri al Ahmar_ER"];
    var es_region=["Andalucia_ES","Aragon_ES","Asturias, Principado de_ES","Canarias_ES","Cantabria_ES","Castilla y Leon_ES","Castilla-La Mancha_ES","Catalunya_ES","Ceuta_ES","Extremadura_ES","Galicia_ES","Illes Balears_ES","La Rioja_ES","Madrid, Comunidad de_ES","Melilla_ES","Murcia, Region de_ES","Navarra, Comunidad Foral de_ES","Pais Vasco_ES","Valenciana, Comunidad_ES"];
    var et_region=["Adis Abeba_ET","Afar_ET","Amara_ET","Binshangul Gumuz_ET","Dire Dawa_ET","Gambela Hizboch_ET","Hareri Hizb_ET","Oromiya_ET","Sumale_ET","Tigray_ET","YeDebub Biheroch Bihereseboch na Hizboch_ET"];
    var fi_region=["Etela-Karjala_FI","Etela-Pohjanmaa_FI","Etela-Savo_FI","Kainuu_FI","Kanta-Hame_FI","Keski-Pohjanmaa_FI","Keski-Suomi_FI","Kymenlaakso_FI","Lappi_FI","Paijat-Hame_FI","Pirkanmaa_FI","Pohjanmaa_FI","Pohjois-Karjala_FI","Pohjois-Pohjanmaa_FI","Pohjois-Savo_FI","Satakunta_FI","Uusimaa_FI","Varsinais-Suomi_FI"];
    var fj_region=["Central_FJ","Eastern_FJ","Northern_FJ","Rotuma_FJ","Western_FJ"];
    var fk_region=["Falkland Islands (Malvinas)_FK"];
    var fm_region=["Chuuk_FM","Kosrae_FM","Pohnpei_FM","Yap_FM"];
    var fo_region=["Eysturoy_FO","Nordoyar_FO","Sandoy_FO","Streymoy_FO","Suduroy_FO","Vagar_FO"];
    var fr_region=["Auvergne-Rhone-Alpes_FR","Bourgogne-Franche-Comte_FR","Bretagne_FR","Centre-Val de Loire_FR","Corse_FR","Grand-Est_FR","Hauts-de-France_FR","Ile-de-France_FR","Normandie_FR","Nouvelle-Aquitaine_FR","Occitanie_FR","Pays-de-la-Loire_FR","Provence-Alpes-Cote-d'Azur_FR"];
    var ga_region=["Estuaire_GA","Haut-Ogooue_GA","Moyen-Ogooue_GA","Ngounie_GA","Nyanga_GA","Ogooue-Ivindo_GA","Ogooue-Lolo_GA","Ogooue-Maritime_GA","Woleu-Ntem_GA"];
    var gb_region=["England_GB","Northern Ireland_GB","Scotland_GB","Wales_GB","London_GB","Birmingham_GB","Manchester_GB","Leeds_GB","Newcastle upon Tyne_GB","Leicester_GB","Glasgow City_GB","Liverpool_GB","Southampton_GB","Portsmouth_GB","Nottingham_GB","Bristol_GB","Sheffield_GB","Kingston upon Hull_GB","Edinburgh_GB","Cardiff_GB","Stoke-on-Trent_GB","Coventry_GB","Reading_GB","Belfast_GB","Derby_GB","Plymouth_GB","Wolverhampton_GB","Swansea_GB","Milton Keynes_GB","Islington_GB","Aberdeen City_GB","Luton_GB","Norfolk_GB","Croydon_GB","Swindon_GB","Essex_GB","Bournemouth_GB","West Sussex_GB","Suffolk_GB","Sunderland_GB","Redbridge_GB","Redcar and Cleveland_GB","Warrington_GB","Kirklees_GB","Slough_GB","Oxfordshire_GB","York_GB","Harrow_GB","Poole_GB","Hertfordshire_GB","Dundee City_GB","Blackpool_GB","Haringey_GB","Telford and Wrekin_GB","Trafford_GB","Brighton and Hove_GB","Enfield_GB","Buckinghamshire_GB","Bolton_GB","Havering_GB","Newport_GB","Devon_GB","Solihull_GB","Gateshead_GB","Lancashire_GB","Blackburn with Darwen_GB","Waltham Forest_GB","Gloucestershire_GB","Hampshire_GB","Kent_GB","Doncaster_GB","Rotherham_GB","Hounslow_GB","Rochdale_GB","Bedford_GB","Stockport_GB","Darlington_GB","Salford_GB","Brent_GB","Barking and Dagenham_GB","Medway_GB","Nottinghamshire_GB","East Sussex_GB","Worcestershire_GB","Wigan_GB","St. Helens_GB","Wakefield_GB","Lincolnshire_GB","Northamptonshire_GB","Hammersmith and Fulham_GB","Newham_GB","Barnsley_GB","Hartlepool_GB","Ealing_GB","Wirral_GB","Warwickshire_GB","Lambeth_GB","Bromley_GB","Bath and North East Somerset_GB","Hillingdon_GB","Greenwich_GB","Bracknell Forest_GB","Barnet_GB","Derry and Strabane_GB","North Lincolnshire_GB","Sandwell_GB","Dudley_GB","South Tyneside_GB","Renfrewshire_GB","North Somerset_GB","Bury_GB","Cumbria_GB","North Yorkshire_GB","Staffordshire_GB","Kensington and Chelsea_GB","South Lanarkshire_GB","Cheshire East_GB","Wandsworth_GB","Highland_GB","Windsor and Maidenhead_GB","Merton_GB","Leicestershire_GB","North Tyneside_GB","Walsall_GB","Wrexham_GB","Richmond upon Thames_GB","Halton_GB","Somerset_GB","Ards and North Down_GB","Herefordshire_GB","Cheshire West and Chester_GB","Sefton_GB","Vale of Glamorgan_GB","Fife_GB","Carmarthenshire_GB","Dorset_GB","Lewisham_GB","North Lanarkshire_GB","Bridgend_GB","Kingston upon Thames_GB","Tameside_GB","Perth and Kinross_GB","South Ayrshire_GB","Wokingham_GB","Bexley_GB","Merthyr Tydfil_GB","South Gloucestershire_GB","West Berkshire_GB","Sutton_GB","Knowsley_GB","Wiltshire_GB","Caerphilly_GB","Thurrock_GB","Derbyshire_GB","North East Lincolnshire_GB","Central Bedfordshire_GB","Northumberland_GB","Rhondda Cynon Taff_GB","Neath Port Talbot_GB","Surrey_GB","Torfaen_GB","East Riding of Yorkshire_GB","Cambridgeshire_GB","Falkirk_GB","Isle of Wight_GB","Calderdale_GB","Denbighshire_GB","East Renfrewshire_GB","Durham_GB","Tower Hamlets_GB","Southend-on-Sea_GB","West Dunbartonshire_GB","Camden_GB","Hackney_GB","East Dunbartonshire_GB","Stockton-on-Tees_GB","Moray_GB","Cornwall_GB","Oldham_GB","Clackmannanshire_GB","Conwy_GB","West Lothian_GB","Flintshire_GB","Antrim and Newtownabbey_GB","Bradford_GB","Midlothian_GB","Angus_GB","Scottish Borders_GB","Aberdeenshire_GB","Pembrokeshire_GB","Dumfries and Galloway_GB","Monmouthshire_GB","Blaenau Gwent_GB","Rutland_GB","Middlesbrough_GB","Shropshire_GB","Gwynedd_GB","Orkney Islands_GB","East Lothian_GB","Argyll and Bute_GB","Shetland Islands_GB","Lisburn and Castlereagh_GB","Torbay_GB","East Ayrshire_GB","Inverclyde_GB","Stirling_GB","North Ayrshire_GB","Fermanagh and Omagh_GB","Ceredigion_GB","Armagh_GB","Isle of Anglesey_GB","Powys_GB","Eilean Siar_GB","Peterborough_GB"];
    var gd_region=["Saint Andrew_GD","Saint David_GD","Saint George_GD","Saint John_GD","Saint Mark_GD","Saint Patrick_GD","Southern Grenadine Islands_GD"];
    var ge_region=["Abkhazia_GE","Ajaria_GE","Guria_GE","Imereti_GE","K'akheti_GE","Kvemo Kartli_GE","Mtskheta-Mtianeti_GE","Rach'a-Lechkhumi-Kvemo Svaneti_GE","Samegrelo-Zemo Svaneti_GE","Samtskhe-Javakheti_GE","Shida Kartli_GE","Tbilisi_GE"];
    var gf_region=["Guyane_GF"];
    var gg_region=["Guernsey_GG"];
    var gh_region=["Ashanti_GH","Brong-Ahafo_GH","Central_GH","Eastern_GH","Greater Accra_GH","Northern_GH","Upper East_GH","Upper West_GH","Volta_GH","Western_GH"];
    var gi_region=["Gibraltar_GI"];
    var gl_region=["Avannaata Kommunia_GL","Kommune Kujalleq_GL","Kommune Qeqertalik_GL","Kommuneqarfik Sermersooq_GL","Qeqqata Kommunia_GL"];
    var gm_region=["Banjul_GM","Central River_GM","Lower River_GM","North Bank_GM","Upper River_GM","Western_GM"];
    var gn_region=["Beyla_GN","Boffa_GN","Boke_GN","Conakry_GN","Coyah_GN","Dabola_GN","Dalaba_GN","Dinguiraye_GN","Dubreka_GN","Faranah_GN","Forecariah_GN","Fria_GN","Gaoual_GN","Guekedou_GN","Kankan_GN","Kerouane_GN","Kindia_GN","Kissidougou_GN","Koubia_GN","Koundara_GN","Kouroussa_GN","Labe_GN","Lelouma_GN","Lola_GN","Macenta_GN","Mali_GN","Mamou_GN","Mandiana_GN","Nzerekore_GN","Pita_GN","Siguiri_GN","Telimele_GN","Tougue_GN","Yomou_GN"];
    var gp_region=["Guadeloupe_GP"];
    var gq_region=["Annobon_GQ","Bioko Norte_GQ","Bioko Sur_GQ","Centro Sur_GQ","Kie-Ntem_GQ","Litoral_GQ","Wele-Nzas_GQ"];
    var gr_region=["Agion Oros_GR","Anatoliki Makedonia kai Thraki_GR","Attiki_GR","Dytiki Ellada_GR","Dytiki Makedonia_GR","Ionia Nisia_GR","Ipeiros_GR","Kentriki Makedonia_GR","Kriti_GR","Notio Aigaio_GR","Peloponnisos_GR","Sterea Ellada_GR","Thessalia_GR","Voreio Aigaio_GR"];
    var gs_region=["South Georgia and the South Sandwich Islands_GS"];
    var gt_region=["Alta Verapaz_GT","Baja Verapaz_GT","Chimaltenango_GT","Chiquimula_GT","El Progreso_GT","Escuintla_GT","Guatemala_GT","Huehuetenango_GT","Izabal_GT","Jalapa_GT","Jutiapa_GT","Peten_GT","Quetzaltenango_GT","Quiche_GT","Retalhuleu_GT","Sacatepequez_GT","San Marcos_GT","Santa Rosa_GT","Solola_GT","Suchitepequez_GT","Totonicapan_GT","Zacapa_GT"];
    var gu_region=["Agana Heights_GU","Agat_GU","Asan-Maina_GU","Barrigada_GU","Chalan Pago-Ordot_GU","Dededo_GU","Hagatna_GU","Inarajan_GU","Mangilao_GU","Merizo_GU","Mongmong-Toto-Maite_GU","Piti_GU","Santa Rita_GU","Sinajana_GU","Talofofo_GU","Tamuning-Tumon-Harmon_GU","Umatac_GU","Yigo_GU","Yona_GU"];
    var gw_region=["Bafata_GW","Biombo_GW","Bissau_GW","Bolama_GW","Cacheu_GW","Gabu_GW","Oio_GW","Quinara_GW","Tombali_GW"];
    var gy_region=["Barima-Waini_GY","Cuyuni-Mazaruni_GY","Demerara-Mahaica_GY","East Berbice-Corentyne_GY","Essequibo Islands-West Demerara_GY","Mahaica-Berbice_GY","Pomeroon-Supenaam_GY","Potaro-Siparuni_GY","Upper Demerara-Berbice_GY","Upper Takutu-Upper Essequibo_GY"];
    var hk_region=["Hong Kong_HK"];
    var hn_region=["Atlantida_HN","Choluteca_HN","Colon_HN","Comayagua_HN","Copan_HN","Cortes_HN","El Paraiso_HN","Francisco Morazan_HN","Gracias a Dios_HN","Intibuca_HN","Islas de la Bahia_HN","La Paz_HN","Lempira_HN","Ocotepeque_HN","Olancho_HN","Santa Barbara_HN","Valle_HN","Yoro_HN"];
    var hr_region=["Bjelovarsko-bilogorska zupanija_HR","Brodsko-posavska zupanija_HR","Dubrovacko-neretvanska zupanija_HR","Grad Zagreb_HR","Istarska zupanija_HR","Karlovacka zupanija_HR","Koprivnicko-krizevacka zupanija_HR","Krapinsko-zagorska zupanija_HR","Licko-senjska zupanija_HR","Medimurska zupanija_HR","Osjecko-baranjska zupanija_HR","Pozesko-slavonska zupanija_HR","Primorsko-goranska zupanija_HR","Sibensko-kninska zupanija_HR","Sisacko-moslavacka zupanija_HR","Splitsko-dalmatinska zupanija_HR","Varazdinska zupanija_HR","Viroviticko-podravska zupanija_HR","Vukovarsko-srijemska zupanija_HR","Zadarska zupanija_HR","Zagrebacka zupanija_HR"];
    var ht_region=["Artibonite_HT","Centre_HT","Grande'Anse_HT","Nippes_HT","Nord_HT","Nord-Est_HT","Nord-Ouest_HT","Ouest_HT","Sud_HT","Sud-Est_HT"];
    var hu_region=["Bacs-Kiskun_HU","Baranya_HU","Bekes_HU","Borsod-Abauj-Zemplen_HU","Budapest_HU","Csongrad_HU","Fejer_HU","Gyor-Moson-Sopron_HU","Hajdu-Bihar_HU","Heves_HU","Jasz-Nagykun-Szolnok_HU","Komarom-Esztergom_HU","Nograd_HU","Pest_HU","Somogy_HU","Szabolcs-Szatmar-Bereg_HU","Tolna_HU","Vas_HU","Veszprem_HU","Zala_HU"];
    var id_region=["Aceh_ID","Bali_ID","Banten_ID","Bengkulu_ID","Gorontalo_ID","Jakarta Raya_ID","Jambi_ID","Jawa Barat_ID","Jawa Tengah_ID","Jawa Timur_ID","Kalimantan Barat_ID","Kalimantan Selatan_ID","Kalimantan Tengah_ID","Kalimantan Timur_ID","Kalimantan Utara_ID","Kepulauan Bangka Belitung_ID","Kepulauan Riau_ID","Lampung_ID","Maluku_ID","Maluku Utara_ID","Nusa Tenggara Barat_ID","Nusa Tenggara Timur_ID","Papua_ID","Papua Barat_ID","Riau_ID","Sulawesi Barat_ID","Sulawesi Selatan_ID","Sulawesi Tengah_ID","Sulawesi Tenggara_ID","Sulawesi Utara_ID","Sumatera Barat_ID","Sumatera Selatan_ID","Sumatera Utara_ID","Yogyakarta_ID"];
    var ie_region=["Carlow_IE","Cavan_IE","Clare_IE","Cork_IE","Donegal_IE","Dublin_IE","Galway_IE","Kerry_IE","Kildare_IE","Kilkenny_IE","Laois_IE","Leitrim_IE","Limerick_IE","Longford_IE","Louth_IE","Mayo_IE","Meath_IE","Monaghan_IE","Offaly_IE","Roscommon_IE","Sligo_IE","Tipperary_IE","Waterford_IE","Westmeath_IE","Wexford_IE","Wicklow_IE"];
    //var il_region=[];
    var im_region=["Isle of Man_IM"];
    var in_region=["Andaman and Nicobar Islands_IN","Andhra Pradesh_IN","Arunachal Pradesh_IN","Assam_IN","Bihar_IN","Chandigarh_IN","Chhattisgarh_IN","Dadra and Nagar Haveli_IN","Daman and Diu_IN","Delhi_IN","Goa_IN","Gujarat_IN","Haryana_IN","Himachal Pradesh_IN","Jammu and Kashmir_IN","Jharkhand_IN","Karnataka_IN","Kerala_IN","Lakshadweep_IN","Madhya Pradesh_IN","Maharashtra_IN","Manipur_IN","Meghalaya_IN","Mizoram_IN","Nagaland_IN","Odisha_IN","Puducherry_IN","Punjab_IN","Rajasthan_IN","Sikkim_IN","Tamil Nadu_IN","Telangana_IN","Tripura_IN","Uttar Pradesh_IN","Uttarakhand_IN","West Bengal_IN"];
    var io_region=["British Indian Ocean Territory_IO"];
    var iq_region=["Al Anbar_IQ","Al Basrah_IQ","Al Muthanna_IQ","Al Qadisiyah_IQ","An Najaf_IQ","Arbil_IQ","As Sulaymaniyah_IQ","Babil_IQ","Baghdad_IQ","Dahuk_IQ","Dhi Qar_IQ","Diyala_IQ","Karbala'_IQ","Kirkuk_IQ","Maysan_IQ","Ninawa_IQ","Salah ad Din_IQ","Wasit_IQ"];
    var ir_region=["Alborz_IR","Ardabil_IR","Azarbayjan-e Gharbi_IR","Azarbayjan-e Sharqi_IR","Bushehr_IR","Chahar Mahal va Bakhtiari_IR","Esfahan_IR","Fars_IR","Gilan_IR","Golestan_IR","Hamadan_IR","Hormozgan_IR","Ilam_IR","Kerman_IR","Kermanshah_IR","Khorasan-e Jonubi_IR","Khorasan-e Razavi_IR","Khorasan-e Shomali_IR","Khuzestan_IR","Kohgiluyeh va Bowyer Ahmad_IR","Kordestan_IR","Lorestan_IR","Markazi_IR","Mazandaran_IR","Qazvin_IR","Qom_IR","Semnan_IR","Sistan va Baluchestan_IR","Tehran_IR","Yazd_IR","Zanjan_IR"];
    var is_region=["Austurland_IS","Hofudborgarsvaedi_IS","Nordurland eystra_IS","Nordurland vestra_IS","Sudurland_IS","Sudurnes_IS","Vestfirdir_IS","Vesturland_IS"];
    var it_region=["Abruzzo_IT","Basilicata_IT","Calabria_IT","Campania_IT","Emilia-Romagna_IT","Friuli-Venezia Giulia_IT","Lazio_IT","Liguria_IT","Lombardia_IT","Marche_IT","Molise_IT","Piemonte_IT","Puglia_IT","Sardegna_IT","Sicilia_IT","Toscana_IT","Trentino-Alto Adige_IT","Umbria_IT","Valle d'Aosta_IT","Veneto_IT"];
    var je_region=["Jersey_JE"];
    var jm_region=["Clarendon_JM","Hanover_JM","Kingston_JM","Manchester_JM","Portland_JM","Saint Andrew_JM","Saint Ann_JM","Saint Catherine_JM","Saint Elizabeth_JM","Saint James_JM","Saint Mary_JM","Saint Thomas_JM","Trelawny_JM","Westmoreland_JM"];
    var jo_region=["\'Ajlun_JO","Al 'Aqabah_JO","Al 'Asimah_JO","Al Balqa'_JO","Al Karak_JO","Al Mafraq_JO","At Tafilah_JO","Az Zarqa'_JO","Irbid_JO","Jarash_JO","Ma'an_JO","Madaba_JO"];
    var jp_region=["Aichi_JP","Akita_JP","Aomori_JP","Chiba_JP","Ehime_JP","Fukui_JP","Fukuoka_JP","Fukushima_JP","Gifu_JP","Gunma_JP","Hiroshima_JP","Hokkaido_JP","Hyogo_JP","Ibaraki_JP","Ishikawa_JP","Iwate_JP","Kagawa_JP","Kagoshima_JP","Kanagawa_JP","Kochi_JP","Kumamoto_JP","Kyoto_JP","Mie_JP","Miyagi_JP","Miyazaki_JP","Nagano_JP","Nagasaki_JP","Nara_JP","Niigata_JP","Oita_JP","Okayama_JP","Okinawa_JP","Osaka_JP","Saga_JP","Saitama_JP","Shiga_JP","Shimane_JP","Shizuoka_JP","Tochigi_JP","Tokushima_JP","Tokyo_JP","Tottori_JP","Toyama_JP","Wakayama_JP","Yamagata_JP","Yamaguchi_JP","Yamanashi_JP"];
    var ke_region=["Baringo_KE","Bomet_KE","Bungoma_KE","Busia_KE","Elgeyo/Marakwet_KE","Embu_KE","Garissa_KE","Homa Bay_KE","Isiolo_KE","Kajiado_KE","Kakamega_KE","Kericho_KE","Kiambu_KE","Kilifi_KE","Kirinyaga_KE","Kisii_KE","Kisumu_KE","Kitui_KE","Kwale_KE","Laikipia_KE","Lamu_KE","Machakos_KE","Makueni_KE","Mandera_KE","Marsabit_KE","Meru_KE","Migori_KE","Mombasa_KE","Murang'a_KE","Nairobi City_KE","Nakuru_KE","Nandi_KE","Narok_KE","Nyamira_KE","Nyandarua_KE","Nyeri_KE","Samburu_KE","Siaya_KE","Taita/Taveta_KE","Tana River_KE","Tharaka-Nithi_KE","Trans Nzoia_KE","Turkana_KE","Uasin Gishu_KE","Vihiga_KE","Wajir_KE","West Pokot_KE"];
    var kg_region=["Batken_KG","Bishkek_KG","Chuy_KG","Jalal-Abad_KG","Naryn_KG","Osh_KG","Talas_KG","Ysyk-Kol_KG"];
    var kh_region=["Baat Dambang_KH","Banteay Mean Chey_KH","Kampong Chaam_KH","Kampong Chhnang_KH","Kampong Spueu_KH","Kampong Thum_KH","Kampot_KH","Kandaal_KH","Kaoh Kong_KH","Kracheh_KH","Krong Kaeb_KH","Krong Pailin_KH","Krong Preah Sihanouk_KH","Mondol Kiri_KH","Otdar Mean Chey_KH","Phnom Penh_KH","Pousaat_KH","Preah Vihear_KH","Prey Veaeng_KH","Rotanak Kiri_KH","Siem Reab_KH","Stueng Traeng_KH","Svaay Rieng_KH","Taakaev_KH"];
    var ki_region=["Gilbert Islands_KI","Line Islands_KI"];
    var km_region=["Anjouan_KM","Grande Comore_KM","Moheli_KM"];
    var kn_region=["Christ Church Nichola Town_KN","Saint Anne Sandy Point_KN","Saint George Basseterre_KN","Saint George Gingerland_KN","Saint James Windward_KN","Saint John Capisterre_KN","Saint John Figtree_KN","Saint Mary Cayon_KN","Saint Paul Capisterre_KN","Saint Paul Charlestown_KN","Saint Peter Basseterre_KN","Saint Thomas Lowland_KN","Saint Thomas Middle Island_KN","Trinity Palmetto Point_KN"];
    var kp_region=["Chagang-do_KP","Hamgyong-bukto_KP","Hamgyong-namdo_KP","Hwanghae-bukto_KP","Hwanghae-namdo_KP","Kangwon-do_KP","P'yongan-bukto_KP","P'yongan-namdo_KP","P'yongyang_KP","Rason_KP","Ryanggang-do_KP"];
    var kr_region=["Busan-gwangyeoksi_KR","Chungcheongbuk-do_KR","Chungcheongnam-do_KR","Daegu-gwangyeoksi_KR","Daejeon-gwangyeoksi_KR","Gangwon-do_KR","Gwangju-gwangyeoksi_KR","Gyeonggi-do_KR","Gyeongsangbuk-do_KR","Gyeongsangnam-do_KR","Incheon-gwangyeoksi_KR","Jeju-teukbyeoljachido_KR","Jeollabuk-do_KR","Jeollanam-do_KR","Seoul-teukbyeolsi_KR","Ulsan-gwangyeoksi_KR"];
    var kw_region=["Al 'Asimah_KW","Al Ahmadi_KW","Al Farwaniyah_KW","Al Jahra'_KW","Hawalli_KW","Mubarak al Kabir_KW"];
    var ky_region=["Cayman Islands_KY"];
    var kz_region=["Almaty_KZ","Almaty oblysy_KZ","Aqmola oblysy_KZ","Aqtobe oblysy_KZ","Astana_KZ","Atyrau oblysy_KZ","Batys Qazaqstan oblysy_KZ","Bayqongyr_KZ","Mangghystau oblysy_KZ","Ongtustik Qazaqstan oblysy_KZ","Pavlodar oblysy_KZ","Qaraghandy oblysy_KZ","Qostanay oblysy_KZ","Qyzylorda oblysy_KZ","Shyghys Qazaqstan oblysy_KZ","Soltustik Qazaqstan oblysy_KZ","Zhambyl oblysy_KZ"];
    var la_region=["Attapu_LA","Bokeo_LA","Bolikhamxai_LA","Champasak_LA","Houaphan_LA","Khammouan_LA","Louang Namtha_LA","Louangphabang_LA","Oudomxai_LA","Phongsali_LA","Salavan_LA","Savannakhet_LA","Viangchan_LA","Xaignabouli_LA","Xekong_LA","Xiangkhouang_LA"];
    var lb_region=["Aakkar_LB","Baalbek-Hermel_LB","Beqaa_LB","Beyrouth_LB","Liban-Nord_LB","Liban-Sud_LB","Mont-Liban_LB","Nabatiye_LB"];
    var lc_region=["Anse la Raye_LC","Castries_LC","Choiseul_LC","Dennery_LC","Gros Islet_LC","Laborie_LC","Micoud_LC","Soufriere_LC","Vieux Fort_LC"];
    var li_region=["Balzers_LI","Eschen_LI","Gamprin_LI","Mauren_LI","Planken_LI","Ruggell_LI","Schaan_LI","Schellenberg_LI","Triesen_LI","Triesenberg_LI","Vaduz_LI"];
    var lk_region=["Central Province_LK","Eastern Province_LK","North Central Province_LK","North Western Province_LK","Northern Province_LK","Sabaragamuwa Province_LK","Southern Province_LK","Uva Province_LK","Western Province_LK"];
    var lr_region=["Bomi_LR","Bong_LR","Gbarpolu_LR","Grand Bassa_LR","Grand Cape Mount_LR","Grand Gedeh_LR","Grand Kru_LR","Lofa_LR","Margibi_LR","Maryland_LR","Montserrado_LR","Nimba_LR","River Cess_LR","River Gee_LR","Sinoe_LR"];
    var ls_region=["Berea_LS","Butha-Buthe_LS","Leribe_LS","Mafeteng_LS","Maseru_LS","Mohale's Hoek_LS","Mokhotlong_LS","Qacha's Nek_LS","Quthing_LS","Thaba-Tseka_LS"];
    var lt_region=["Alytaus apskritis_LT","Kauno apskritis_LT","Klaipedos apskritis_LT","Marijampoles apskritis_LT","Panevezio apskritis_LT","Siauliu apskritis_LT","Taurages apskritis_LT","Telsiu apskritis_LT","Utenos apskritis_LT","Vilniaus apskritis_LT"];
    var lu_region=["Diekirch_LU","Grevenmacher_LU","Luxembourg_LU"];
    var lv_region=["Adazu novads_LV","Aglonas novads_LV","Aizkraukles novads_LV","Aizputes novads_LV","Alojas novads_LV","Aluksnes novads_LV","Babites novads_LV","Baldones novads_LV","Baltinavas novads_LV","Balvu novads_LV","Bauskas novads_LV","Beverinas novads_LV","Brocenu novads_LV","Carnikavas novads_LV","Cesu novads_LV","Cesvaines novads_LV","Ciblas novads_LV","Daugavpils novads_LV","Dobeles novads_LV","Dundagas novads_LV","Erglu novads_LV","Gulbenes novads_LV","Iecavas novads_LV","Ikskiles novads_LV","Incukalna novads_LV","Jaunjelgavas novads_LV","Jaunpiebalgas novads_LV","Jaunpils novads_LV","Jekabpils novads_LV","Jelgava_LV","Jelgavas novads_LV","Jurmala_LV","Kekavas novads_LV","Kokneses novads_LV","Kraslavas novads_LV","Kuldigas novads_LV","Lielvardes novads_LV","Liepaja_LV","Limbazu novads_LV","Livanu novads_LV","Lubanas novads_LV","Ludzas novads_LV","Madonas novads_LV","Malpils novads_LV","Nauksenu novads_LV","Ogres novads_LV","Olaines novads_LV","Ozolnieku novads_LV","Preilu novads_LV","Rezeknes novads_LV","Riebinu novads_LV","Riga_LV","Rojas novads_LV","Ropazu novads_LV","Rugaju novads_LV","Rundales novads_LV","Salacgrivas novads_LV","Salaspils novads_LV","Saldus novads_LV","Saulkrastu novads_LV","Sejas novads_LV","Siguldas novads_LV","Skrundas novads_LV","Stopinu novads_LV","Strencu novads_LV","Talsu novads_LV","Tukuma novads_LV","Vainodes novads_LV","Valkas novads_LV","Valmiera_LV","Varkavas novads_LV","Vecumnieku novads_LV","Ventspils novads_LV"];
    var ly_region=["Al Butnan_LY","Al Jabal al Akhdar_LY","Al Jabal al Gharbi_LY","Al Jafarah_LY","Al Jufrah_LY","Al Kufrah_LY","Al Marj_LY","Al Marqab_LY","Al Wahat_LY","An Nuqat al Khams_LY","Az Zawiyah_LY","Banghazi_LY","Darnah_LY","Ghat_LY","Misratah_LY","Murzuq_LY","Nalut_LY","Sabha_LY","Surt_LY","Tarabulus_LY","Wadi al Hayat_LY","Wadi ash Shati'_LY"];
    var ma_region=["Beni-Mellal-Khenifra_MA","Casablanca-Settat_MA","Draa-Tafilalet_MA","Fes- Meknes_MA","Guelmim-Oued Noun (EH-partial)_MA","L'Oriental_MA","Laayoune-Sakia El Hamra (EH-partial)_MA","Marrakech-Safi_MA","Rabat-Sale-Kenitra_MA","Souss-Massa_MA","Tanger-Tetouan-Al Hoceima_MA"];
    var mc_region=["Fontvieille_MC","La Condamine_MC","Monaco-Ville_MC","Moneghetti_MC","Monte-Carlo_MC","Saint-Roman_MC"];
    var md_region=["Anenii Noi_MD","Balti_MD","Basarabeasca_MD","Bender_MD","Briceni_MD","Cahul_MD","Calarasi_MD","Cantemir_MD","Causeni_MD","Chisinau_MD","Cimislia_MD","Criuleni_MD","Donduseni_MD","Drochia_MD","Dubasari_MD","Edinet_MD","Falesti_MD","Floresti_MD","Gagauzia, Unitatea teritoriala autonoma_MD","Glodeni_MD","Hincesti_MD","Ialoveni_MD","Leova_MD","Nisporeni_MD","Ocnita_MD","Orhei_MD","Rezina_MD","Riscani_MD","Singerei_MD","Soldanesti_MD","Soroca_MD","Stefan Voda_MD","Stinga Nistrului, unitatea teritoriala din_MD","Straseni_MD","Taraclia_MD","Telenesti_MD","Ungheni_MD"];
    var me_region=["Andrijevica_ME","Bar_ME","Berane_ME","Bijelo Polje_ME","Budva_ME","Cetinje_ME","Danilovgrad_ME","Herceg-Novi_ME","Kolasin_ME","Kotor_ME","Mojkovac_ME","Niksic_ME","Plav_ME","Pljevlja_ME","Pluzine_ME","Podgorica_ME","Rozaje_ME","Savnik_ME","Tivat_ME","Ulcinj_ME","Zabljak_ME"];
    var mf_region=["Saint Martin (French Part)_MF"];
    var mg_region=["Antananarivo_MG","Antsiranana_MG","Fianarantsoa_MG","Mahajanga_MG","Toamasina_MG","Toliara_MG"];
    var mh_region=["Ailinglaplap_MH","Ailuk_MH","Arno_MH","Aur_MH","Bikini & Kili_MH","Ebon_MH","Enewetak & Ujelang_MH","Jabat_MH","Jaluit_MH","Kwajalein_MH","Lae_MH","Lib_MH","Likiep_MH","Majuro_MH","Maloelap_MH","Mejit_MH","Mili_MH","Namdrik_MH","Namu_MH","Rongelap_MH","Ujae_MH","Utrik_MH","Wotho_MH","Wotje_MH"];
    var mk_region=["Aracinovo_MK","Berovo_MK","Bitola_MK","Bogdanci_MK","Bogovinje_MK","Bosilovo_MK","Brvenica_MK","Caska_MK","Centar Zupa_MK","Cesinovo-Oblesevo_MK","Cucer Sandevo_MK","Debar_MK","Debarca_MK","Delcevo_MK","Demir Hisar_MK","Demir Kapija_MK","Dojran_MK","Dolneni_MK","Gevgelija_MK","Gostivar_MK","Gradsko_MK","Ilinden_MK","Jegunovce_MK","Karbinci_MK","Kavadarci_MK","Kicevo_MK","Kocani_MK","Konce_MK","Kratovo_MK","Kriva Palanka_MK","Krivogastani_MK","Krusevo_MK","Kumanovo_MK","Lipkovo_MK","Lozovo_MK","Makedonska Kamenica_MK","Makedonski Brod_MK","Mavrovo i Rostusa_MK","Mogila_MK","Negotino_MK","Novaci_MK","Novo Selo_MK","Ohrid_MK","Pehcevo_MK","Petrovec_MK","Plasnica_MK","Prilep_MK","Probistip_MK","Radovis_MK","Rankovce_MK","Resen_MK","Rosoman_MK","Skopje_MK","Sopiste_MK","Staro Nagoricane_MK","Stip_MK","Struga_MK","Strumica_MK","Studenicani_MK","Sveti Nikole_MK","Tearce_MK","Tetovo_MK","Valandovo_MK","Vasilevo_MK","Veles_MK","Vevcani_MK","Vinica_MK","Vrapciste_MK","Zelenikovo_MK","Zelino_MK","Zrnovci_MK"];
    var ml_region=["Bamako_ML","Gao_ML","Kayes_ML","Kidal_ML","Koulikoro_ML","Mopti_ML","Segou_ML","Sikasso_ML","Tombouctou_ML"];
    var mm_region=["Ayeyarwady_MM","Bago_MM","Chin_MM","Kachin_MM","Kayah_MM","Kayin_MM","Magway_MM","Mandalay_MM","Mon_MM","Nay Pyi Taw_MM","Rakhine_MM","Sagaing_MM","Shan_MM","Tanintharyi_MM","Yangon_MM"];
    var mn_region=["Arhangay_MN","Bayan-Olgiy_MN","Bayanhongor_MN","Bulgan_MN","Darhan uul_MN","Dornod_MN","Dornogovi_MN","Dundgovi_MN","Dzavhan_MN","Govi-Altay_MN","Govi-Sumber_MN","Hentiy_MN","Hovd_MN","Hovsgol_MN","Omnogovi_MN","Orhon_MN","Ovorhangay_MN","Selenge_MN","Suhbaatar_MN","Tov_MN","Ulaanbaatar_MN","Uvs_MN"];
    var mo_region=["Macao_MO"];
    var mp_region=["Northern Mariana Islands_MP"];
    var mq_region=["Martinique_MQ"];
    var mr_region=["Adrar_MR","Assaba_MR","Brakna_MR","Dakhlet Nouadhibou_MR","Gorgol_MR","Guidimaka_MR","Hodh ech Chargui_MR","Hodh el Gharbi_MR","Inchiri_MR","Nouakchott Nord_MR","Tagant_MR","Tiris Zemmour_MR","Trarza_MR"];
    var ms_region=["Saint Anthony_MS","Saint Peter_MS"];
    var mt_region=["Attard_MT","Balzan_MT","Birgu_MT","Birkirkara_MT","Birzebbuga_MT","Bormla_MT","Dingli_MT","Fgura_MT","Floriana_MT","Fontana_MT","Ghajnsielem_MT","Gharb_MT","Gharghur_MT","Ghasri_MT","Ghaxaq_MT","Gudja_MT","Gzira_MT","Hamrun_MT","Iklin_MT","Isla_MT","Kalkara_MT","Kercem_MT","Kirkop_MT","Lija_MT","Luqa_MT","Marsa_MT","Marsaskala_MT","Marsaxlokk_MT","Mdina_MT","Mellieha_MT","Mgarr_MT","Mosta_MT","Mqabba_MT","Msida_MT","Mtarfa_MT","Munxar_MT","Nadur_MT","Naxxar_MT","Paola_MT","Pembroke_MT","Pieta_MT","Qala_MT","Qormi_MT","Qrendi_MT","Rabat Gozo_MT","Rabat Malta_MT","Safi_MT","Saint John_MT","Saint Julian's_MT","Saint Lucia's_MT","Saint Paul's Bay_MT","Sannat_MT","Santa Venera_MT","Siggiewi_MT","Sliema_MT","Swieqi_MT","Ta' Xbiex_MT","Tarxien_MT","Valletta_MT","Xaghra_MT","Xewkija_MT","Xghajra_MT","Zabbar_MT","Zebbug Gozo_MT","Zejtun_MT","Zurrieq_MT"];
    var mu_region=["Agalega Islands_MU","Black River_MU","Flacq_MU","Grand Port_MU","Moka_MU","Pamplemousses_MU","Plaines Wilhems_MU","Port Louis_MU","Riviere du Rempart_MU","Rodrigues Islands_MU","Savanne_MU"];
    var mv_region=["Alifu Alifu_MV","Baa_MV","Dhaalu_MV","Gaafu Dhaalu_MV","Gnaviyani_MV","Haa Alifu_MV","Haa Dhaalu_MV","Kaafu_MV","Laamu_MV","Maale_MV","Meemu_MV","Noonu_MV","Raa_MV","Seenu_MV","Shaviyani_MV","Thaa_MV","Vaavu_MV"];
    var mw_region=["Balaka_MW","Blantyre_MW","Chikwawa_MW","Chiradzulu_MW","Chitipa_MW","Dedza_MW","Dowa_MW","Karonga_MW","Kasungu_MW","Likoma_MW","Lilongwe_MW","Machinga_MW","Mangochi_MW","Mchinji_MW","Mulanje_MW","Mwanza_MW","Mzimba_MW","Neno_MW","Nkhata Bay_MW","Nkhotakota_MW","Nsanje_MW","Ntcheu_MW","Ntchisi_MW","Phalombe_MW","Rumphi_MW","Salima_MW","Thyolo_MW","Zomba_MW"];
    var mx_region=["Aguascalientes_MX","Baja California_MX","Baja California Sur_MX","Campeche_MX","Chiapas_MX","Chihuahua_MX","Ciudad de Mexico_MX","Coahuila de Zaragoza_MX","Colima_MX","Durango_MX","Guanajuato_MX","Guerrero_MX","Hidalgo_MX","Jalisco_MX","Mexico_MX","Michoacan de Ocampo_MX","Morelos_MX","Nayarit_MX","Nuevo Leon_MX","Oaxaca_MX","Puebla_MX","Queretaro_MX","Quintana Roo_MX","San Luis Potosi_MX","Sinaloa_MX","Sonora_MX","Tabasco_MX","Tamaulipas_MX","Tlaxcala_MX","Veracruz de Ignacio de la Llave_MX","Yucatan_MX","Zacatecas_MX"];
    var my_region=["Johor_MY","Kedah_MY","Kelantan_MY","Melaka_MY","Negeri Sembilan_MY","Pahang_MY","Perak_MY","Perlis_MY","Pulau Pinang_MY","Sabah_MY","Sarawak_MY","Selangor_MY","Terengganu_MY","Wilayah Persekutuan Kuala Lumpur_MY","Wilayah Persekutuan Labuan_MY","Wilayah Persekutuan Putrajaya_MY"];
    var mz_region=["Cabo Delgado_MZ","Gaza_MZ","Inhambane_MZ","Manica_MZ","Maputo_MZ","Nampula_MZ","Niassa_MZ","Sofala_MZ","Tete_MZ","Zambezia_MZ"];
    var na_region=["Erongo_NA","Hardap_NA","Karas_NA","Kavango East_NA","Khomas_NA","Kunene_NA","Ohangwena_NA","Omaheke_NA","Omusati_NA","Oshana_NA","Oshikoto_NA","Otjozondjupa_NA","Zambezi_NA"];
    var nc_region=["Province des iles Loyaute_NC","Province Nord_NC","Province Sud_NC"];
    var ne_region=["Agadez_NE","Diffa_NE","Dosso_NE","Maradi_NE","Niamey_NE","Tahoua_NE","Tillaberi_NE","Zinder_NE"];
    var nf_region=["Norfolk Island_NF"];
    var ng_region=["Abia_NG","Abuja Federal Capital Territory_NG","Adamawa_NG","Akwa Ibom_NG","Anambra_NG","Bauchi_NG","Bayelsa_NG","Benue_NG","Borno_NG","Cross River_NG","Delta_NG","Ebonyi_NG","Edo_NG","Ekiti_NG","Enugu_NG","Gombe_NG","Imo_NG","Jigawa_NG","Kaduna_NG","Kano_NG","Katsina_NG","Kebbi_NG","Kogi_NG","Kwara_NG","Lagos_NG","Nasarawa_NG","Niger_NG","Ogun_NG","Ondo_NG","Osun_NG","Oyo_NG","Plateau_NG","Rivers_NG","Sokoto_NG","Taraba_NG","Yobe_NG","Zamfara_NG"];
    var ni_region=["Boaco_NI","Carazo_NI","Chinandega_NI","Chontales_NI","Costa Caribe Norte_NI","Costa Caribe Sur_NI","Esteli_NI","Granada_NI","Jinotega_NI","Leon_NI","Madriz_NI","Managua_NI","Masaya_NI","Matagalpa_NI","Nueva Segovia_NI","Rio San Juan_NI","Rivas_NI"];
    var nl_region=["Drenthe_NL","Flevoland_NL","Fryslan_NL","Gelderland_NL","Groningen_NL","Limburg_NL","Noord-Brabant_NL","Noord-Holland_NL","Overijssel_NL","Utrecht_NL","Zeeland_NL","Zuid-Holland_NL"];
    var no_region=["Akershus_NO","Aust-Agder_NO","Buskerud_NO","Finnmark_NO","Hedmark_NO","Hordaland_NO","More og Romsdal_NO","Nord-Trondelag_NO","Nordland_NO","Oppland_NO","Oslo_NO","Ostfold_NO","Rogaland_NO","Sogn og Fjordane_NO","Sor-Trondelag_NO","Telemark_NO","Troms_NO","Vest-Agder_NO","Vestfold_NO"];
    var np_region=["Bagmati_NP","Bheri_NP","Dhawalagiri_NP","Gandaki_NP","Janakpur_NP","Karnali_NP","Kosi_NP","Lumbini_NP","Mahakali_NP","Mechi_NP","Narayani_NP","Rapti_NP","Sagarmatha_NP","Seti_NP"];
    var nr_region=["Aiwo_NR","Anabar_NR","Anetan_NR","Anibare_NR","Baitsi_NR","Buada_NR","Ewa_NR","Ijuw_NR","Uaboe_NR","Yaren_NR"];
    var nu_region=["Niue_NU"];
    var nz_region=["Auckland_NZ","Bay of Plenty_NZ","Canterbury_NZ","Chatham Islands Territory_NZ","Gisborne_NZ","Hawke's Bay_NZ","Manawatu-Wanganui_NZ","Marlborough_NZ","Nelson_NZ","Northland_NZ","Otago_NZ","Southland_NZ","Taranaki_NZ","Tasman_NZ","Waikato_NZ","Wellington_NZ","West Coast_NZ"];
    var om_region=["Ad Dakhiliyah_OM","Al Buraymi_OM","Al Wusta_OM","Az Zahirah_OM","Janub al Batinah_OM","Janub ash Sharqiyah_OM","Masqat_OM","Musandam_OM","Shamal al Batinah_OM","Shamal ash Sharqiyah_OM","Zufar_OM"];
    var pa_region=["Bocas del Toro_PA","Chiriqui_PA","Cocle_PA","Colon_PA","Darien_PA","Embera_PA","Guna Yala_PA","Herrera_PA","Los Santos_PA","Ngobe-Bugle_PA","Panama_PA","Veraguas_PA"];
    var pe_region=["Amazonas_PE","Ancash_PE","Apurimac_PE","Arequipa_PE","Ayacucho_PE","Cajamarca_PE","Cusco_PE","El Callao_PE","Huancavelica_PE","Huanuco_PE","Ica_PE","Junin_PE","La Libertad_PE","Lambayeque_PE","Lima_PE","Loreto_PE","Madre de Dios_PE","Moquegua_PE","Pasco_PE","Piura_PE","Puno_PE","San Martin_PE","Tacna_PE","Tumbes_PE","Ucayali_PE"];
    var pf_region=["Iles Australes_PF","Iles du Vent_PF","Iles Marquises_PF","Iles Sous-le-Vent_PF","Iles Tuamotu-Gambier_PF"];
    var pg_region=["Bougainville_PG","Central_PG","Chimbu_PG","East New Britain_PG","East Sepik_PG","Eastern Highlands_PG","Enga_PG","Gulf_PG","Madang_PG","Manus_PG","Milne Bay_PG","Morobe_PG","National Capital District (Port Moresby)_PG","New Ireland_PG","Northern_PG","Southern Highlands_PG","West New Britain_PG","West Sepik_PG","Western_PG","Western Highlands_PG"];
    var ph_region=["Abra_PH","Agusan del Norte_PH","Agusan del Sur_PH","Aklan_PH","Albay_PH","Antique_PH","Apayao_PH","Aurora_PH","Basilan_PH","Bataan_PH","Batanes_PH","Batangas_PH","Benguet_PH","Biliran_PH","Bohol_PH","Bukidnon_PH","Bulacan_PH","Cagayan_PH","Camarines Norte_PH","Camarines Sur_PH","Camiguin_PH","Capiz_PH","Catanduanes_PH","Cavite_PH","Cebu_PH","Compostela Valley_PH","Cotabato_PH","Davao del Norte_PH","Davao del Sur_PH","Davao Oriental_PH","Dinagat Islands_PH","Eastern Samar_PH","Guimaras_PH","Ifugao_PH","Ilocos Norte_PH","Ilocos Sur_PH","Iloilo_PH","Isabela_PH","Kalinga_PH","La Union_PH","Laguna_PH","Lanao del Norte_PH","Lanao del Sur_PH","Leyte_PH","Maguindanao_PH","Marinduque_PH","Masbate_PH","Mindoro Occidental_PH","Mindoro Oriental_PH","Misamis Occidental_PH","Misamis Oriental_PH","Mountain Province_PH","National Capital Region_PH","Negros Occidental_PH","Negros Oriental_PH","Northern Samar_PH","Nueva Ecija_PH","Nueva Vizcaya_PH","Palawan_PH","Pampanga_PH","Pangasinan_PH","Quezon_PH","Quirino_PH","Rizal_PH","Romblon_PH","Samar_PH","Sarangani_PH","Siquijor_PH","Sorsogon_PH","South Cotabato_PH","Southern Leyte_PH","Sultan Kudarat_PH","Sulu_PH","Surigao del Norte_PH","Surigao del Sur_PH","Tarlac_PH","Tawi-Tawi_PH","Zambales_PH","Zamboanga del Norte_PH","Zamboanga del Sur_PH","Zamboanga Sibugay_PH"];
    var pk_region=["Azad Jammu and Kashmir_PK","Balochistan_PK","Federally Administered Tribal Areas_PK","Gilgit-Baltistan_PK","Islamabad_PK","Khyber Pakhtunkhwa_PK","Punjab_PK","Sindh_PK"];
    var pl_region=["Dolnoslaskie_PL","Kujawsko-pomorskie_PL","Lodzkie_PL","Lubelskie_PL","Lubuskie_PL","Malopolskie_PL","Mazowieckie_PL","Opolskie_PL","Podkarpackie_PL","Podlaskie_PL","Pomorskie_PL","Slaskie_PL","Swietokrzyskie_PL","Warminsko-mazurskie_PL","Wielkopolskie_PL","Zachodniopomorskie_PL"];
    var pm_region=["Saint Pierre and Miquelon_PM"];
    var pn_region=["Pitcairn_PN"];
    var pr_region=["Adjuntas_PR","Aguada_PR","Aguadilla_PR","Aguas Buenas_PR","Aibonito_PR","Anasco_PR","Arecibo_PR","Arroyo_PR","Barceloneta_PR","Barranquitas_PR","Bayamon_PR","Cabo Rojo_PR","Caguas_PR","Camuy_PR","Canovanas_PR","Carolina_PR","Catano_PR","Cayey_PR","Ceiba_PR","Ciales_PR","Cidra_PR","Coamo_PR","Comerio_PR","Corozal_PR","Culebra_PR","Dorado_PR","Fajardo_PR","Florida_PR","Guanica_PR","Guayama_PR","Guayanilla_PR","Guaynabo_PR","Gurabo_PR","Hatillo_PR","Hormigueros_PR","Humacao_PR","Isabela_PR","Juana Diaz_PR","Lajas_PR","Lares_PR","Las Marias_PR","Las Piedras_PR","Loiza_PR","Luquillo_PR","Manati_PR","Maricao_PR","Maunabo_PR","Mayaguez_PR","Moca_PR","Morovis_PR","Municipio de Jayuya_PR","Municipio de Juncos_PR","Naguabo_PR","Naranjito_PR","Patillas_PR","Penuelas_PR","Ponce_PR","Quebradillas_PR","Rincon_PR","Rio Grande_PR","Sabana Grande_PR","Salinas_PR","San German_PR","San Juan_PR","San Lorenzo_PR","San Sebastian_PR","Santa Isabel Municipio_PR","Toa Alta_PR","Toa Baja_PR","Trujillo Alto_PR","Utuado_PR","Vega Alta_PR","Vega Baja_PR","Vieques_PR","Villalba_PR","Yabucoa_PR","Yauco_PR"];
    var ps_region=["Bethlehem_PS","Gaza_PS","Hebron_PS","Jenin_PS","Jericho and Al Aghwar_PS","Jerusalem_PS","Nablus_PS","Qalqilya_PS","Ramallah_PS","Salfit_PS","Tubas_PS","Tulkarm_PS","Hefa_IL","Tel Aviv_IL"];
    var pt_region=["Aveiro_PT","Beja_PT","Braga_PT","Braganca_PT","Castelo Branco_PT","Coimbra_PT","Evora_PT","Faro_PT","Guarda_PT","Leiria_PT","Lisboa_PT","Portalegre_PT","Porto_PT","Regiao Autonoma da Madeira_PT","Regiao Autonoma dos Acores_PT","Santarem_PT","Setubal_PT","Viana do Castelo_PT","Vila Real_PT","Viseu_PT"];
    var pw_region=["Aimeliik_PW","Airai_PW","Angaur_PW","Hatohobei_PW","Kayangel_PW","Koror_PW","Melekeok_PW","Ngaraard_PW","Ngarchelong_PW","Ngardmau_PW","Ngatpang_PW","Ngchesar_PW","Ngeremlengui_PW","Ngiwal_PW","Peleliu_PW","Sonsorol_PW"];
    var py_region=["Alto Paraguay_PY","Alto Parana_PY","Amambay_PY","Asuncion_PY","Boqueron_PY","Caaguazu_PY","Caazapa_PY","Canindeyu_PY","Central_PY","Concepcion_PY","Cordillera_PY","Guaira_PY","Itapua_PY","Misiones_PY","Neembucu_PY","Paraguari_PY","Presidente Hayes_PY","San Pedro_PY"];
    var qa_region=["Ad Dawhah_QA","Al Khawr wa adh Dhakhirah_QA","Al Wakrah_QA","Ar Rayyan_QA","Ash Shamal_QA","Az Za'ayin_QA","Umm Salal_QA"];
    var re_region=["Reunion_RE"];
    var ro_region=["Alba_RO","Arad_RO","Arges_RO","Bacau_RO","Bihor_RO","Bistrita-Nasaud_RO","Botosani_RO","Braila_RO","Brasov_RO","Bucuresti_RO","Buzau_RO","Calarasi_RO","Caras-Severin_RO","Cluj_RO","Constanta_RO","Covasna_RO","Dambovita_RO","Dolj_RO","Galati_RO","Giurgiu_RO","Gorj_RO","Harghita_RO","Hunedoara_RO","Ialomita_RO","Iasi_RO","Ilfov_RO","Maramures_RO","Mehedinti_RO","Mures_RO","Neamt_RO","Olt_RO","Prahova_RO","Salaj_RO","Satu Mare_RO","Sibiu_RO","Suceava_RO","Teleorman_RO","Timis_RO","Tulcea_RO","Valcea_RO","Vaslui_RO","Vrancea_RO"];
    var rs_region=["Beograd_RS","Borski okrug_RS","Branicevski okrug_RS","Jablanicki okrug_RS","Juznobacki okrug_RS","Juznobanatski okrug_RS","Kolubarski okrug_RS","Kosovsko-Mitrovacki okrug_RS","Macvanski okrug_RS","Moravicki okrug_RS","Nisavski okrug_RS","Pcinjski okrug_RS","Pecki okrug_RS","Pirotski okrug_RS","Podunavski okrug_RS","Pomoravski okrug_RS","Prizrenski okrug_RS","Rasinski okrug_RS","Raski okrug_RS","Severnobacki okrug_RS","Severnobanatski okrug_RS","Srednjebanatski okrug_RS","Sremski okrug_RS","Sumadijski okrug_RS","Toplicki okrug_RS","Zajecarski okrug_RS","Zapadnobacki okrug_RS","Zlatiborski okrug_RS"];
    var ru_region=["Adygeya, Respublika_RU","Altay, Respublika_RU","Altayskiy kray_RU","Amurskaya oblast'_RU","Arkhangel'skaya oblast'_RU","Astrakhanskaya oblast'_RU","Bashkortostan, Respublika_RU","Belgorodskaya oblast'_RU","Bryanskaya oblast'_RU","Buryatiya, Respublika_RU","Chechenskaya Respublika_RU","Chelyabinskaya oblast'_RU","Chukotskiy avtonomnyy okrug_RU","Chuvashskaya Respublika_RU","Ingushetiya, Respublika_RU","Irkutskaya oblast'_RU","Ivanovskaya oblast'_RU","Kabardino-Balkarskaya Respublika_RU","Kaliningradskaya oblast'_RU","Kalmykiya, Respublika_RU","Kaluzhskaya oblast'_RU","Kamchatskiy kray_RU","Karachayevo-Cherkesskaya Respublika_RU","Kareliya, Respublika_RU","Kemerovskaya oblast'_RU","Khabarovskiy kray_RU","Khakasiya, Respublika_RU","Khanty-Mansiyskiy avtonomnyy okrug_RU","Kirovskaya oblast'_RU","Komi, Respublika_RU","Kostromskaya oblast'_RU","Krasnodarskiy kray_RU","Krasnoyarskiy kray_RU","Kurganskaya oblast'_RU","Kurskaya oblast'_RU","Leningradskaya oblast'_RU","Lipetskaya oblast'_RU","Magadanskaya oblast'_RU","Mariy El, Respublika_RU","Mordoviya, Respublika_RU","Moskovskaya oblast'_RU","Moskva_RU","Murmanskaya oblast'_RU","Nenetskiy avtonomnyy okrug_RU","Nizhegorodskaya oblast'_RU","Novgorodskaya oblast'_RU","Novosibirskaya oblast'_RU","Omskaya oblast'_RU","Orenburgskaya oblast'_RU","Orlovskaya oblast'_RU","Penzenskaya oblast'_RU","Permskiy kray_RU","Primorskiy kray_RU","Pskovskaya oblast'_RU","Rostovskaya oblast'_RU","Ryazanskaya oblast'_RU","Saha, Respublika_RU","Sakhalinskaya oblast'_RU","Samarskaya oblast'_RU","Sankt-Peterburg_RU","Saratovskaya oblast'_RU","Severnaya Osetiya, Respublika_RU","Smolenskaya oblast'_RU","Stavropol'skiy kray_RU","Sverdlovskaya oblast'_RU","Tambovskaya oblast'_RU","Tatarstan, Respublika_RU","Tomskaya oblast'_RU","Tul'skaya oblast'_RU","Tverskaya oblast'_RU","Tyumenskaya oblast'_RU","Tyva, Respublika_RU","Udmurtskaya Respublika_RU","Ul'yanovskaya oblast'_RU","Vladimirskaya oblast'_RU","Volgogradskaya oblast'_RU","Vologodskaya oblast'_RU","Voronezhskaya oblast'_RU","Yamalo-Nenetskiy avtonomnyy okrug_RU","Yaroslavskaya oblast'_RU","Yevreyskaya avtonomnaya oblast'_RU","Zabaykal'skiy kray_RU"];
    var rw_region=["Est_RW","Nord_RW","Ouest_RW","Sud_RW","Ville de Kigali_RW"];
    var sa_region=["\'Asir_SA","Al Bahah_SA","Al Hudud ash Shamaliyah_SA","Al Jawf_SA","Al Madinah al Munawwarah_SA","Al Qasim_SA","Ar Riyad_SA","Ash Sharqiyah_SA","Ha'il_SA","Jazan_SA","Makkah al Mukarramah_SA","Najran_SA","Tabuk_SA"];
    var sb_region=["Central_SB","Choiseul_SB","Guadalcanal_SB","Isabel_SB","Makira-Ulawa_SB","Malaita_SB","Rennell and Bellona_SB","Temotu_SB","Western_SB"];
    var sc_region=["Anse aux Pins_SC","Anse Boileau_SC","Anse Royale_SC","Baie Lazare_SC","Beau Vallon_SC","Bel Ombre_SC","Cascade_SC","English River_SC","Grand Anse Mahe_SC","La Digue_SC","Pointe Larue_SC","Port Glaud_SC","Takamaka_SC"];
    var sd_region=["Blue Nile_SD","Gedaref_SD","Gezira_SD","Kassala_SD","Khartoum_SD","North Darfur_SD","North Kordofan_SD","Northern_SD","Red Sea_SD","River Nile_SD","Sennar_SD","South Darfur_SD","South Kordofan_SD","West Darfur_SD","White Nile_SD"];
    var se_region=["Blekinge lan_SE","Dalarnas lan_SE","Gavleborgs lan_SE","Gotlands lan_SE","Hallands lan_SE","Jamtlands lan_SE","Jonkopings lan_SE","Kalmar lan_SE","Kronobergs lan_SE","Norrbottens lan_SE","Orebro lan_SE","Ostergotlands lan_SE","Skane lan_SE","Sodermanlands lan_SE","Stockholms lan_SE","Uppsala lan_SE","Varmlands lan_SE","Vasterbottens lan_SE","Vasternorrlands lan_SE","Vastmanlands lan_SE","Vastra Gotalands lan_SE"];
    var sg_region=["Singapore_SG"];
    var sh_region=["Ascension_SH","Saint Helena_SH","Tristan da Cunha_SH"];
    var si_region=["Ajdovscina_SI","Apace_SI","Beltinci_SI","Benedikt_SI","Bistrica ob Sotli_SI","Bled_SI","Bloke_SI","Bohinj_SI","Borovnica_SI","Bovec_SI","Braslovce_SI","Brda_SI","Brezice_SI","Brezovica_SI","Cankova_SI","Celje_SI","Cerklje na Gorenjskem_SI","Cerknica_SI","Cerkno_SI","Cirkulane_SI","Crensovci_SI","Crnomelj_SI","Destrnik_SI","Divaca_SI","Dobje_SI","Dobrepolje_SI","Dobrna_SI","Dobrova-Polhov Gradec_SI","Dobrovnik_SI","Domzale_SI","Dornava_SI","Dravograd_SI","Duplek_SI","Gorje_SI","Gornja Radgona_SI","Gornji Petrovci_SI","Grad_SI","Grosuplje_SI","Hajdina_SI","Hoce-Slivnica_SI","Hodos_SI","Horjul_SI","Hrastnik_SI","Hrpelje-Kozina_SI","Idrija_SI","Ig_SI","Ilirska Bistrica_SI","Ivancna Gorica_SI","Izola_SI","Jesenice_SI","Jursinci_SI","Kamnik_SI","Kanal_SI","Kidricevo_SI","Kobarid_SI","Kobilje_SI","Kocevje_SI","Komen_SI","Komenda_SI","Koper_SI","Kosanjevica na Krki_SI","Kostel_SI","Kranj_SI","Kranjska Gora_SI","Krizevci_SI","Krsko_SI","Kungota_SI","Kuzma_SI","Lasko_SI","Lenart_SI","Lendava_SI","Litija_SI","Ljubljana_SI","Ljutomer_SI","Log-Dragomer_SI","Logatec_SI","Loska Dolina_SI","Loski Potok_SI","Lovrenc na Pohorju_SI","Luce_SI","Lukovica_SI","Majsperk_SI","Makole_SI","Maribor_SI","Markovci_SI","Medvode_SI","Menges_SI","Metlika_SI","Mezica_SI","Miklavz na Dravskem Polju_SI","Miren-Kostanjevica_SI","Mirna Pec_SI","Mislinja_SI","Mokronog-Trebelno_SI","Moravce_SI","Mozirje_SI","Murska Sobota_SI","Muta_SI","Naklo_SI","Nazarje_SI","Nova Gorica_SI","Novo Mesto_SI","Odranci_SI","Oplotnica_SI","Ormoz_SI","Piran_SI","Pivka_SI","Podcetrtek_SI","Podlehnik_SI","Poljcane_SI","Polzela_SI","Postojna_SI","Prebold_SI","Preddvor_SI","Prevalje_SI","Ptuj_SI","Puconci_SI","Race-Fram_SI","Radece_SI","Radenci_SI","Radlje ob Dravi_SI","Radovljica_SI","Ravne na Koroskem_SI","Razkrizje_SI","Recica ob Savinji_SI","Rence-Vogrsko_SI","Ribnica_SI","Rogaska Slatina_SI","Rogasovci_SI","Ruse_SI","Salovci_SI","Semic_SI","Sempeter-Vrtojba_SI","Sencur_SI","Sentilj_SI","Sentjernej_SI","Sentjur_SI","Sentrupert_SI","Sevnica_SI","Sezana_SI","Skocjan_SI","Skofja Loka_SI","Skofljica_SI","Slovenj Gradec_SI","Slovenska Bistrica_SI","Slovenske Konjice_SI","Smarje pri Jelsah_SI","Smarjeske Toplice_SI","Smartno ob Paki_SI","Smartno pri Litiji_SI","Sodrazica_SI","Solcava_SI","Sostanj_SI","Starse_SI","Store_SI","Straza_SI","Sveta Trojica v Slovenskih Goricah_SI","Sveti Andraz v Slovenskih Goricah_SI","Sveti Jurij_SI","Sveti Jurij v Slovenskih Goricah_SI","Sveti Tomaz_SI","Tabor_SI","Tisina_SI","Tolmin_SI","Trbovlje_SI","Trebnje_SI","Trnovska Vas_SI","Trzic_SI","Trzin_SI","Turnisce_SI","Velenje_SI","Velika Polana_SI","Velike Lasce_SI","Verzej_SI","Videm_SI","Vipava_SI","Vitanje_SI","Vodice_SI","Vojnik_SI","Vransko_SI","Vrhnika_SI","Vuzenica_SI","Zagorje ob Savi_SI","Zalec_SI","Zavrc_SI","Zelezniki_SI","Zetale_SI","Ziri_SI","Zrece_SI","Zuzemberk_SI"];
    var sj_region=["Svalbard and Jan Mayen_SJ"];
    var sk_region=["Banskobystricky kraj_SK","Bratislavsky kraj_SK","Kosicky kraj_SK","Nitriansky kraj_SK","Presovsky kraj_SK","Trenciansky kraj_SK","Trnavsky kraj_SK","Zilinsky kraj_SK"];
    var sl_region=["Eastern_SL","Northern_SL","Southern_SL","Western Area_SL"];
    var sm_region=["Acquaviva_SM","Borgo Maggiore_SM","Chiesanuova_SM","Domagnano_SM","Faetano_SM","Fiorentino_SM","Montegiardino_SM","San Marino_SM","Serravalle_SM"];
    var sn_region=["Dakar_SN","Diourbel_SN","Fatick_SN","Kaffrine_SN","Kaolack_SN","Kedougou_SN","Kolda_SN","Louga_SN","Matam_SN","Saint-Louis_SN","Sedhiou_SN","Tambacounda_SN","Thies_SN","Ziguinchor_SN"];
    var so_region=["Awdal_SO","Bakool_SO","Banaadir_SO","Bari_SO","Bay_SO","Galguduud_SO","Gedo_SO","Hiiraan_SO","Jubbada Dhexe_SO","Jubbada Hoose_SO","Mudug_SO","Nugaal_SO","Sanaag_SO","Shabeellaha Dhexe_SO","Shabeellaha Hoose_SO","Sool_SO","Togdheer_SO","Woqooyi Galbeed_SO"];
    var sr_region=["Brokopondo_SR","Commewijne_SR","Coronie_SR","Marowijne_SR","Nickerie_SR","Para_SR","Paramaribo_SR","Saramacca_SR","Sipaliwini_SR","Wanica_SR"];
    var ss_region=["Central Equatoria_SS","Eastern Equatoria_SS","Jonglei_SS","Lakes_SS","Northern Bahr el Ghazal_SS","Unity_SS","Upper Nile_SS","Warrap_SS","Western Bahr el Ghazal_SS","Western Equatoria_SS"];
    var st_region=["Principe_ST","Sao Tome_ST"];
    var sv_region=["Ahuachapan_SV","Cabanas_SV","Chalatenango_SV","Cuscatlan_SV","La Libertad_SV","La Paz_SV","La Union_SV","Morazan_SV","San Miguel_SV","San Salvador_SV","San Vicente_SV","Santa Ana_SV","Sonsonate_SV","Usulutan_SV"];
    var sx_region=["Sint Maarten (Dutch Part)_SX"];
    var sy_region=["Al Hasakah_SY","Al Ladhiqiyah_SY","Al Qunaytirah_SY","Ar Raqqah_SY","As Suwayda'_SY","Dar'a_SY","Dayr az Zawr_SY","Dimashq_SY","Halab_SY","Hamah_SY","Hims_SY","Idlib_SY","Rif Dimashq_SY","Tartus_SY"];
    var sz_region=["Hhohho_SZ","Lubombo_SZ","Manzini_SZ","Shiselweni_SZ"];
    var tc_region=["Turks and Caicos Islands_TC"];
    var td_region=["Bahr el Gazel_TD","Batha_TD","Borkou_TD","Chari-Baguirmi_TD","Guera_TD","Hadjer Lamis_TD","Kanem_TD","Lac_TD","Logone-Occidental_TD","Logone-Oriental_TD","Mandoul_TD","Mayo-Kebbi-Est_TD","Mayo-Kebbi-Ouest_TD","Moyen-Chari_TD","Ouaddai_TD","Salamat_TD","Sila_TD","Tandjile_TD","Tibesti_TD","Ville de Ndjamena_TD","Wadi Fira_TD"];
    var tf_region=["French Southern Territories_TF"];
    var tg_region=["Centrale_TG","Kara_TG","Maritime_TG","Plateaux_TG","Savanes_TG"];
    var th_region=["Amnat Charoen_TH","Ang Thong_TH","Bueng Kan_TH","Buri Ram_TH","Chachoengsao_TH","Chai Nat_TH","Chaiyaphum_TH","Chanthaburi_TH","Chiang Mai_TH","Chiang Rai_TH","Chon Buri_TH","Chumphon_TH","Kalasin_TH","Kamphaeng Phet_TH","Kanchanaburi_TH","Khon Kaen_TH","Krabi_TH","Krung Thep Maha Nakhon_TH","Lampang_TH","Lamphun_TH","Loei_TH","Lop Buri_TH","Mae Hong Son_TH","Maha Sarakham_TH","Mukdahan_TH","Nakhon Nayok_TH","Nakhon Pathom_TH","Nakhon Phanom_TH","Nakhon Ratchasima_TH","Nakhon Sawan_TH","Nakhon Si Thammarat_TH","Nan_TH","Narathiwat_TH","Nong Bua Lam Phu_TH","Nong Khai_TH","Nonthaburi_TH","Pathum Thani_TH","Pattani_TH","Phangnga_TH","Phatthalung_TH","Phayao_TH","Phetchabun_TH","Phetchaburi_TH","Phichit_TH","Phitsanulok_TH","Phra Nakhon Si Ayutthaya_TH","Phrae_TH","Phuket_TH","Prachin Buri_TH","Prachuap Khiri Khan_TH","Ranong_TH","Ratchaburi_TH","Rayong_TH","Roi Et_TH","Sa Kaeo_TH","Sakon Nakhon_TH","Samut Prakan_TH","Samut Sakhon_TH","Samut Songkhram_TH","Saraburi_TH","Satun_TH","Si Sa Ket_TH","Sing Buri_TH","Songkhla_TH","Sukhothai_TH","Suphan Buri_TH","Surat Thani_TH","Surin_TH","Tak_TH","Trang_TH","Trat_TH","Ubon Ratchathani_TH","Udon Thani_TH","Uthai Thani_TH","Uttaradit_TH","Yala_TH","Yasothon_TH"];
    var tj_region=["Dushanbe_TJ","Khatlon_TJ","Kuhistoni Badakhshon_TJ","Nohiyahoi Tobei Jumhuri_TJ","Sughd_TJ"];
    var tk_region=["Tokelau_TK"];
    var tl_region=["Aileu_TL","Ainaro_TL","Baucau_TL","Bobonaro_TL","Cova Lima_TL","Dili_TL","Ermera_TL","Lautem_TL","Liquica_TL","Manatuto_TL","Manufahi_TL","Oecussi_TL","Viqueque_TL"];
    var tm_region=["Ahal_TM","Balkan_TM","Dasoguz_TM","Lebap_TM","Mary_TM"];
    var tn_region=["Beja_TN","Ben Arous_TN","Bizerte_TN","Gabes_TN","Gafsa_TN","Jendouba_TN","Kairouan_TN","Kasserine_TN","Kebili_TN","L'Ariana_TN","La Manouba_TN","Le Kef_TN","Mahdia_TN","Medenine_TN","Monastir_TN","Nabeul_TN","Sfax_TN","Sidi Bouzid_TN","Siliana_TN","Sousse_TN","Tataouine_TN","Tozeur_TN","Tunis_TN","Zaghouan_TN"];
    var to_region=["\'Eua_TO","Ha'apai_TO","Niuas_TO","Tongatapu_TO","Vava'u_TO"];
    var tr_region=["Adana_TR","Adiyaman_TR","Afyonkarahisar_TR","Agri_TR","Aksaray_TR","Amasya_TR","Ankara_TR","Antalya_TR","Ardahan_TR","Artvin_TR","Aydin_TR","Balikesir_TR","Bartin_TR","Batman_TR","Bayburt_TR","Bilecik_TR","Bingol_TR","Bitlis_TR","Bolu_TR","Burdur_TR","Bursa_TR","Canakkale_TR","Cankiri_TR","Corum_TR","Denizli_TR","Diyarbakir_TR","Duzce_TR","Edirne_TR","Elazig_TR","Erzincan_TR","Erzurum_TR","Eskisehir_TR","Gaziantep_TR","Giresun_TR","Gumushane_TR","Hakkari_TR","Hatay_TR","Igdir_TR","Isparta_TR","Istanbul_TR","Izmir_TR","Kahramanmaras_TR","Karabuk_TR","Karaman_TR","Kars_TR","Kastamonu_TR","Kayseri_TR","Kilis_TR","Kirikkale_TR","Kirklareli_TR","Kirsehir_TR","Kocaeli_TR","Konya_TR","Kutahya_TR","Malatya_TR","Manisa_TR","Mardin_TR","Mersin_TR","Mugla_TR","Mus_TR","Nevsehir_TR","Nigde_TR","Ordu_TR","Osmaniye_TR","Rize_TR","Sakarya_TR","Samsun_TR","Sanliurfa_TR","Siirt_TR","Sinop_TR","Sirnak_TR","Sivas_TR","Tekirdag_TR","Tokat_TR","Trabzon_TR","Tunceli_TR","Usak_TR","Van_TR","Yalova_TR","Yozgat_TR","Zonguldak_TR"];
    var tt_region=["Arima_TT","Chaguanas_TT","Couva-Tabaquite-Talparo_TT","Diego Martin_TT","Mayaro-Rio Claro_TT","Penal-Debe_TT","Point Fortin_TT","Port of Spain_TT","Princes Town_TT","San Fernando_TT","San Juan-Laventille_TT","Sangre Grande_TT","Siparia_TT","Tobago_TT","Tunapuna-Piarco_TT"];
    var tv_region=["Funafuti_TV","Nanumaga_TV","Nanumea_TV","Niutao_TV","Nui_TV","Nukufetau_TV","Nukulaelae_TV","Vaitupu_TV"];
    var tw_region=["Changhua_TW","Chiayi_TW","Hsinchu_TW","Hualien_TW","Kaohsiung_TW","Keelung_TW","Kinmen_TW","Lienchiang_TW","Miaoli_TW","Nantou_TW","New Taipei_TW","Penghu_TW","Pingtung_TW","Taichung_TW","Tainan_TW","Taipei_TW","Taitung_TW","Taoyuan_TW","Yilan_TW","Yunlin_TW"];
    var tz_region=["Arusha_TZ","Dar es Salaam_TZ","Dodoma_TZ","Geita_TZ","Iringa_TZ","Kagera_TZ","Kaskazini Pemba_TZ","Kaskazini Unguja_TZ","Katavi_TZ","Kigoma_TZ","Kilimanjaro_TZ","Kusini Pemba_TZ","Kusini Unguja_TZ","Lindi_TZ","Manyara_TZ","Mara_TZ","Mbeya_TZ","Mjini Magharibi_TZ","Morogoro_TZ","Mtwara_TZ","Mwanza_TZ","Njombe_TZ","Pwani_TZ","Rukwa_TZ","Ruvuma_TZ","Shinyanga_TZ","Simiyu_TZ","Singida_TZ","Tabora_TZ","Tanga_TZ"];
    var ua_region=["Avtonomna Respublika Krym_UA","Cherkaska oblast_UA","Chernihivska oblast_UA","Chernivetska oblast_UA","Dnipropetrovska oblast_UA","Donetska oblast_UA","Ivano-Frankivska oblast_UA","Kharkivska oblast_UA","Khersonska oblast_UA","Khmelnytska oblast_UA","Kirovohradska oblast_UA","Kyiv_UA","Kyivska oblast_UA","Luhanska oblast_UA","Lvivska oblast_UA","Mykolaivska oblast_UA","Odeska oblast_UA","Poltavska oblast_UA","Rivnenska oblast_UA","Sevastopol_UA","Sumska oblast_UA","Ternopilska oblast_UA","Vinnytska oblast_UA","Volynska oblast_UA","Zakarpatska oblast_UA","Zaporizka oblast_UA","Zhytomyrska oblast_UA"];
    var ug_region=["Abim_UG","Adjumani_UG","Agago_UG","Alebtong_UG","Amolatar_UG","Amudat_UG","Amuria_UG","Amuru_UG","Apac_UG","Arua_UG","Budaka_UG","Bududa_UG","Bugiri_UG","Buhweju_UG","Buikwe_UG","Bukedea_UG","Bukomansibi_UG","Bukwa_UG","Bulambuli_UG","Buliisa_UG","Bundibugyo_UG","Bushenyi_UG","Busia_UG","Butaleja_UG","Buvuma_UG","Buyende_UG","Dokolo_UG","Gomba_UG","Gulu_UG","Hoima_UG","Ibanda_UG","Iganga_UG","Isingiro_UG","Jinja_UG","Kaabong_UG","Kabale_UG","Kabarole_UG","Kaberamaido_UG","Kalangala_UG","Kaliro_UG","Kalungu_UG","Kampala_UG","Kamuli_UG","Kamwenge_UG","Kanungu_UG","Kapchorwa_UG","Kasese_UG","Katakwi_UG","Kayunga_UG","Kibaale_UG","Kiboga_UG","Kibuku_UG","Kiruhura_UG","Kiryandongo_UG","Kisoro_UG","Kitgum_UG","Koboko_UG","Kole_UG","Kotido_UG","Kumi_UG","Kween_UG","Kyankwanzi_UG","Kyegegwa_UG","Kyenjojo_UG","Lamwo_UG","Lira_UG","Luuka_UG","Luwero_UG","Lwengo_UG","Lyantonde_UG","Manafwa_UG","Maracha_UG","Masaka_UG","Masindi_UG","Mayuge_UG","Mbale_UG","Mbarara_UG","Mitooma_UG","Mityana_UG","Moroto_UG","Moyo_UG","Mpigi_UG","Mubende_UG","Mukono_UG","Nakapiripirit_UG","Nakaseke_UG","Nakasongola_UG","Namayingo_UG","Namutumba_UG","Napak_UG","Nebbi_UG","Ngora_UG","Ntoroko_UG","Ntungamo_UG","Nwoya_UG","Otuke_UG","Oyam_UG","Pader_UG","Pallisa_UG","Rakai_UG","Rubirizi_UG","Rukungiri_UG","Sembabule_UG","Serere_UG","Sheema_UG","Sironko_UG","Soroti_UG","Tororo_UG","Wakiso_UG","Yumbe_UG","Zombo_UG"];
    var um_region=["Baker Island_UM","Howland Island_UM","Jarvis Island_UM","Palmyra Atoll_UM"];
    var us_region=["Alabama_US","Alaska_US","Arizona_US","Arkansas_US","California_US","Colorado_US","Connecticut_US","Delaware_US","District of Columbia_US","Florida_US","Georgia_US","Hawaii_US","Idaho_US","Illinois_US","Indiana_US","Iowa_US","Kansas_US","Kentucky_US","Louisiana_US","Maine_US","Maryland_US","Massachusetts_US","Michigan_US","Minnesota_US","Mississippi_US","Missouri_US","Montana_US","Nebraska_US","Nevada_US","New Hampshire_US","New Jersey_US","New Mexico_US","New York_US","North Carolina_US","North Dakota_US","Ohio_US","Oklahoma_US","Oregon_US","Pennsylvania_US","Rhode Island_US","South Carolina_US","South Dakota_US","Tennessee_US","Texas_US","Utah_US","Vermont_US","Virginia_US","Washington_US","West Virginia_US","Wisconsin_US","Wyoming_US"];
    var uy_region=["Artigas_UY","Canelones_UY","Cerro Largo_UY","Colonia_UY","Durazno_UY","Flores_UY","Florida_UY","Lavalleja_UY","Maldonado_UY","Montevideo_UY","Paysandu_UY","Rio Negro_UY","Rivera_UY","Rocha_UY","Salto_UY","San Jose_UY","Soriano_UY","Tacuarembo_UY","Treinta y Tres_UY"];
    var uz_region=["Andijon_UZ","Buxoro_UZ","Farg'ona_UZ","Jizzax_UZ","Namangan_UZ","Navoiy_UZ","Qashqadaryo_UZ","Qoraqalpog'iston Respublikasi_UZ","Samarqand_UZ","Sirdaryo_UZ","Surxondaryo_UZ","Toshkent_UZ","Xorazm_UZ"];
    var va_region=["Vatican City_VA"];
    var vc_region=["Charlotte_VC","Grenadines_VC","Saint David_VC","Saint George_VC","Saint Patrick_VC"];
    var ve_region=["Amazonas_VE","Anzoategui_VE","Apure_VE","Aragua_VE","Barinas_VE","Bolivar_VE","Carabobo_VE","Cojedes_VE","Delta Amacuro_VE","Dependencias Federales_VE","Distrito Capital_VE","Falcon_VE","Guarico_VE","Lara_VE","Merida_VE","Miranda_VE","Monagas_VE","Nueva Esparta_VE","Portuguesa_VE","Sucre_VE","Tachira_VE","Trujillo_VE","Vargas_VE","Yaracuy_VE","Zulia_VE"];
    var vg_region=["Virgin Islands, British_VG"];
    var vi_region=["Virgin Islands, U.S._VI"];
    var vn_region=["An Giang_VN","Ba Ria - Vung Tau_VN","Bac Giang_VN","Bac Kan_VN","Bac Lieu_VN","Bac Ninh_VN","Ben Tre_VN","Binh Dinh_VN","Binh Duong_VN","Binh Phuoc_VN","Binh Thuan_VN","Ca Mau_VN","Can Tho_VN","Cao Bang_VN","Da Nang_VN","Dak Lak_VN","Dak Nong_VN","Dien Bien_VN","Dong Nai_VN","Dong Thap_VN","Gia Lai_VN","Ha Giang_VN","Ha Nam_VN","Ha Noi_VN","Ha Tinh_VN","Hai Duong_VN","Hai Phong_VN","Ho Chi Minh_VN","Hoa Binh_VN","Hung Yen_VN","Khanh Hoa_VN","Kien Giang_VN","Kon Tum_VN","Lai Chau_VN","Lam Dong_VN","Lang Son_VN","Lao Cai_VN","Long An_VN","Nam Dinh_VN","Nghe An_VN","Ninh Binh_VN","Ninh Thuan_VN","Phu Tho_VN","Phu Yen_VN","Quang Binh_VN","Quang Nam_VN","Quang Ngai_VN","Quang Ninh_VN","Quang Tri_VN","Soc Trang_VN","Son La_VN","Tay Ninh_VN","Thai Binh_VN","Thai Nguyen_VN","Thanh Hoa_VN","Thua Thien-Hue_VN","Tien Giang_VN","Tra Vinh_VN","Tuyen Quang_VN","Vinh Long_VN","Vinh Phuc_VN","Yen Bai_VN"];
    var vu_region=["Malampa_VU","Penama_VU","Sanma_VU","Shefa_VU","Tafea_VU","Torba_VU"];
    var wf_region=["Alo_WF","Sigave_WF","Uvea_WF"];
    var ws_region=["A'ana_WS","Aiga-i-le-Tai_WS","Atua_WS","Fa'asaleleaga_WS","Gagaifomauga_WS","Palauli_WS","Satupa'itea_WS","Tuamasaga_WS","Va'a-o-Fonoti_WS","Vaisigano_WS"];
    var ye_region=["\'Adan_YE","\'Amran_YE","Abyan_YE","Ad Dali'_YE","Al Bayda'_YE","Al Hudaydah_YE","Al Jawf_YE","Al Mahrah_YE","Al Mahwit_YE","Amanat al 'Asimah_YE","Dhamar_YE","Hadramawt_YE","Hajjah_YE","Ibb_YE","Lahij_YE","Ma'rib_YE","Raymah_YE","Sa'dah_YE","San'a'_YE","Shabwah_YE","Ta'izz_YE"];
    var yt_region=["Acoua_YT","Bandraboua_YT","Bandrele_YT","Boueni_YT","Chiconi_YT","Chirongui_YT","Dzaoudzi_YT","Kani-Keli_YT","Koungou_YT","Mamoudzou_YT","Mtsamboro_YT","Ouangani_YT","Pamandzi_YT","Sada_YT","Tsingoni_YT"];
    var za_region=["Eastern Cape_ZA","Free State_ZA","Gauteng_ZA","Kwazulu-Natal_ZA","Limpopo_ZA","Mpumalanga_ZA","North-West_ZA","Northern Cape_ZA","Western Cape_ZA"];
    var zm_region=["Central_ZM","Copperbelt_ZM","Eastern_ZM","Luapula_ZM","Lusaka_ZM","North-Western_ZM","Northern_ZM","Southern_ZM","Western_ZM"];
    var zw_region=["Bulawayo_ZW","Harare_ZW","Manicaland_ZW","Mashonaland Central_ZW","Mashonaland East_ZW","Mashonaland West_ZW","Masvingo_ZW","Matabeleland North_ZW","Matabeleland South_ZW","Midlands_ZW"];

    //get total length of array
    var arr = [ru_da_region.length,ad_region.length,ae_region.length,af_region.length,ag_region.length,ai_region.length,al_region.length,am_region.length,ao_region.length,aq_region.length,ar_region.length,as_region.length,at_region.length,au_region.length,aw_region.length,ax_region.length,az_region.length,ba_region.length,bb_region.length,bd_region.length,be_region.length,bf_region.length,bg_region.length,bh_region.length,bi_region.length,bj_region.length,bl_region.length,bm_region.length,bn_region.length,bo_region.length,bq_region.length,br_region.length,bs_region.length,bt_region.length,bw_region.length,by_region.length,bz_region.length,ca_region.length,cc_region.length,cd_region.length,cf_region.length,cg_region.length,ch_region.length,ci_region.length,ck_region.length,cl_region.length,cm_region.length,cn_region.length,co_region.length,cr_region.length,cu_region.length,cv_region.length,cw_region.length,cx_region.length,cy_region.length,cz_region.length,de_region.length,dj_region.length,dk_region.length,dm_region.length,do_region.length,dz_region.length,ec_region.length,ee_region.length,eg_region.length,eh_region.length,er_region.length,es_region.length,et_region.length,fi_region.length,fj_region.length,fk_region.length,fm_region.length,fo_region.length,fr_region.length,ga_region.length,gb_region.length,gd_region.length,ge_region.length,gf_region.length,gg_region.length,gh_region.length,gi_region.length,gl_region.length,gm_region.length,gn_region.length,gp_region.length,gq_region.length,gr_region.length,gs_region.length,gt_region.length,gu_region.length,gw_region.length,gy_region.length,hk_region.length,hn_region.length,hr_region.length,ht_region.length,hu_region.length,id_region.length,ie_region.length,
               //           il_region.length,
               im_region.length,in_region.length,io_region.length,iq_region.length,ir_region.length,is_region.length,it_region.length,je_region.length,jm_region.length,jo_region.length,jp_region.length,ke_region.length,kg_region.length,kh_region.length,ki_region.length,km_region.length,kn_region.length,kp_region.length,kr_region.length,kw_region.length,ky_region.length,kz_region.length,la_region.length,lb_region.length,lc_region.length,li_region.length,lk_region.length,lr_region.length,ls_region.length,lt_region.length,lu_region.length,lv_region.length,ly_region.length,ma_region.length,mc_region.length,md_region.length,me_region.length,mf_region.length,mg_region.length,mh_region.length,mk_region.length,ml_region.length,mm_region.length,mn_region.length,mo_region.length,mp_region.length,mq_region.length,mr_region.length,ms_region.length,mt_region.length,mu_region.length,mv_region.length,mw_region.length,mx_region.length,my_region.length,mz_region.length,na_region.length,nc_region.length,ne_region.length,nf_region.length,ng_region.length,ni_region.length,nl_region.length,no_region.length,np_region.length,nr_region.length,nu_region.length,nz_region.length,om_region.length,pa_region.length,pe_region.length,pf_region.length,pg_region.length,ph_region.length,pk_region.length,pl_region.length,pm_region.length,pn_region.length,pr_region.length,ps_region.length,pt_region.length,pw_region.length,py_region.length,qa_region.length,re_region.length,ro_region.length,rs_region.length,ru_region.length,rw_region.length,sa_region.length,sb_region.length,sc_region.length,sd_region.length,se_region.length,sg_region.length,sh_region.length,si_region.length,sj_region.length,sk_region.length,sl_region.length,sm_region.length,sn_region.length,so_region.length,sr_region.length,ss_region.length,st_region.length,sv_region.length,sx_region.length,sy_region.length,sz_region.length,tc_region.length,td_region.length,tf_region.length,tg_region.length,th_region.length,tj_region.length,tk_region.length,tl_region.length,tm_region.length,tn_region.length,to_region.length,tr_region.length,tt_region.length,tv_region.length,tw_region.length,tz_region.length,ua_region.length,ug_region.length,um_region.length,us_region.length,uy_region.length,uz_region.length,va_region.length,vc_region.length,ve_region.length,vg_region.length,vi_region.length,vn_region.length,vu_region.length,wf_region.length,ws_region.length,ye_region.length,yt_region.length,za_region.length,zm_region.length,zw_region.length];
    var arrlen = Math.max.apply(Math, arr);

    var ad =[];var ae =[];var af=[];var ag=[];var ai=[];var al=[];var am=[];var ao=[];var aq=[];var ar=[];var as=[];var at=[];var au=[];var aw=[];var ax=[];var az=[];
    var ba=[];var bb=[];var bd=[];var be=[];var bf=[];var bg=[];var bh=[];var bi=[];var bj=[];var bl=[]; var bm=[];var bn=[];var bo=[];var bq=[];var br=[];var bs=[];var bt=[];var bw=[];var by=[];var bz=[];
    var ca=[];var cc=[];var cd=[];var cf=[];var cg=[];var ch=[];var ci=[];var ck=[];var cl=[];var cm=[];var cn=[];var co=[];var cr=[];var cu=[];var cv=[];var cw=[];var cx=[];var cy=[];var cz=[];
    var de=[];var dj=[];var dk=[];var dm=[];var do1=[];var dz=[];
    var ec=[];var ee=[];var eg=[];var eh=[];var er=[];var es=[];var et=[];
    var fi=[];var fj=[];var fk=[];var fm=[];var fo=[];var fr=[];
    var ga=[];var gb=[];var gd=[];var ge=[];var gf=[];var gg=[];var gh=[];var gi=[];var gl=[];var gm=[];var gn=[];var gp=[];var gq=[];var gr=[];var gs=[];var gt=[];var gu=[];var gw=[];var gy=[];
    var hk=[];var hn=[];var hr=[];var ht=[];var hu=[];
    var id=[];var ie=[];var il=[];var im=[];var in1=[];var io=[];var iq=[];var ir=[];var is=[];var it=[];
    var je=[];var jm=[];var jo=[];var jp=[];
    var ke=[];var kg=[];var kh=[];var ki=[];var km=[];var kn=[];var kp=[];var kr=[];var kw=[];var ky=[];var kz=[];
    var la=[];var lb=[];var lc=[];var li=[];var lk=[];var lr=[];var ls=[];var lt=[];var lu=[];var lv=[];var ly=[];
    var ma=[];var mc=[];var md=[];var me=[];var mf=[];var mg=[];var mh=[];var mk=[];var ml=[];var mm=[];var mn=[];var mo=[];var mp=[];var mq=[];var mr=[];var ms=[];var mt=[];var mu=[];var mv=[];var mw=[];var mx=[];var my=[];var mz=[];
    var na=[];var nc=[];var ne=[];var nf=[];var ng=[];var ni=[];var nl=[];var no=[];var np=[];var nr=[];var nu=[];var nz=[];
    var om=[];
    var pa=[];var pe=[];var pf=[];var pg=[];var ph=[];var pk=[];var pl=[];var pm=[];var pn=[];var pr=[];var ps=[];var pt=[];var pw=[];var py=[];
    var qa=[];
    var re=[];var ro=[];var rs=[];var ru=[];var rw=[];
    var sa=[];var sb=[];var sc=[];var sd=[];var se=[];var sg=[];var sh=[];var si=[];var sj=[];var sk=[];var sl=[];var sm=[];var sn=[];var so=[];var sr=[];var ss=[];var st=[];var sv=[];var sx=[];var sy=[];var sz=[];
    var tc=[];var td=[];var tf=[];var tg=[];var th=[];var tj=[];var tk=[];var tl=[];var tm=[];var tn=[];var to=[];var tr=[];var tt=[];var tv=[];var tw=[];var tz=[];
    var ua=[];var ug=[];var um=[];var us=[];var uy=[];var uz=[];
    var va=[];var vc=[];var ve=[];var vg=[];var vi=[];var vn=[];var vu=[];
    var wf=[];var ws=[];
    var ye=[];var yt=[];
    var za=[];var zm=[];var zw=[];var ru_da=[];

    for (var i=0; i<arrlen; i++) {
        ru_da +=(get.gettext(ru_da_region[i])+"|");
        ad +=(get.gettext(ad_region[i])+"|");
        ae +=(get.gettext(ae_region[i])+"|");af +=(get.gettext(af_region[i])+"|");ag +=(get.gettext(ag_region[i])+"|");ai +=(get.gettext(ai_region[i])+"|");al +=(get.gettext(al_region[i])+"|");am +=(get.gettext(am_region[i])+"|");ao +=(get.gettext(ao_region[i])+"|");aq +=(get.gettext(aq_region[i])+"|");ar +=(get.gettext(ar_region[i])+"|");as +=(get.gettext(as_region[i])+"|");at +=(get.gettext(at_region[i])+"|");au +=(get.gettext(au_region[i])+"|");aw +=(get.gettext(aw_region[i])+"|");ax +=(get.gettext(ax_region[i])+"|");az +=(get.gettext(az_region[i])+"|");
        ba +=(get.gettext(ba_region[i])+"|");bb +=(get.gettext(bb_region[i])+"|");bd +=(get.gettext(bd_region[i])+"|");be +=(get.gettext(be_region[i])+"|");bf +=(get.gettext(bf_region[i])+"|");bg +=(get.gettext(bg_region[i])+"|");bh +=(get.gettext(bh_region[i])+"|");bi +=(get.gettext(bi_region[i])+"|");bj +=(get.gettext(bj_region[i])+"|");bl +=(get.gettext(bl_region[i])+"|");bm +=(get.gettext(bm_region[i])+"|");bn +=(get.gettext(bn_region[i])+"|");bo +=(get.gettext(bo_region[i])+"|");bq +=(get.gettext(bq_region[i])+"|");br +=(get.gettext(br_region[i])+"|");bs +=(get.gettext(bs_region[i])+"|");bt +=(get.gettext(bt_region[i])+"|");bw +=(get.gettext(bw_region[i])+"|");by +=(get.gettext(by_region[i])+"|");bz +=(get.gettext(bz_region[i])+"|");
        ca +=(get.gettext(ca_region[i])+"|");cc +=(get.gettext(cc_region[i])+"|");cd +=(get.gettext(cd_region[i])+"|");cf +=(get.gettext(cf_region[i])+"|");cg +=(get.gettext(cg_region[i])+"|");ch +=(get.gettext(ch_region[i])+"|");ci +=(get.gettext(ci_region[i])+"|");ck +=(get.gettext(ck_region[i])+"|");cl +=(get.gettext(cl_region[i])+"|");cm +=(get.gettext(cm_region[i])+"|");cn +=(get.gettext(cn_region[i])+"|");co +=(get.gettext(co_region[i])+"|");cr +=(get.gettext(cr_region[i])+"|");cu +=(get.gettext(cu_region[i])+"|");cv +=(get.gettext(cv_region[i])+"|");cw +=(get.gettext(cw_region[i])+"|");cx +=(get.gettext(cx_region[i])+"|");cy +=(get.gettext(cy_region[i])+"|");cz +=(get.gettext(cz_region[i])+"|");
        de +=(get.gettext(de_region[i])+"|");dj +=(get.gettext(dj_region[i])+"|");dk +=(get.gettext(dk_region[i])+"|");dm +=(get.gettext(dm_region[i])+"|");do1 +=(get.gettext(do_region[i])+"|");dz +=(get.gettext(dz_region[i])+"|");
        ec +=(get.gettext(ec_region[i])+"|");ee +=(get.gettext(ee_region[i])+"|");eg +=(get.gettext(eg_region[i])+"|");eh +=(get.gettext(eh_region[i])+"|");er +=(get.gettext(er_region[i])+"|");es +=(get.gettext(es_region[i])+"|");et +=(get.gettext(et_region[i])+"|");
        fi +=(get.gettext(fi_region[i])+"|");fj +=(get.gettext(fj_region[i])+"|");fk +=(get.gettext(fk_region[i])+"|");fm +=(get.gettext(fm_region[i])+"|");fo +=(get.gettext(fo_region[i])+"|");fr +=(get.gettext(fr_region[i])+"|");
        ga +=(get.gettext(ga_region[i])+"|");gb +=(get.gettext(gb_region[i])+"|");gd +=(get.gettext(gd_region[i])+"|");ge +=(get.gettext(ge_region[i])+"|");gf +=(get.gettext(gf_region[i])+"|");gg +=(get.gettext(gg_region[i])+"|");gh +=(get.gettext(gh_region[i])+"|");gi +=(get.gettext(gi_region[i])+"|");gl +=(get.gettext(gl_region[i])+"|");gm +=(get.gettext(gm_region[i])+"|");gn +=(get.gettext(gn_region[i])+"|");gp +=(get.gettext(gp_region[i])+"|");gq +=(get.gettext(gq_region[i])+"|");gr +=(get.gettext(gr_region[i])+"|");gs +=(get.gettext(gs_region[i])+"|");gt +=(get.gettext(gt_region[i])+"|");gu +=(get.gettext(gu_region[i])+"|");gw +=(get.gettext(gw_region[i])+"|");gy +=(get.gettext(gy_region[i])+"|");
        hk +=(get.gettext(hk_region[i])+"|");hn +=(get.gettext(hn_region[i])+"|");hr +=(get.gettext(hr_region[i])+"|");ht +=(get.gettext(ht_region[i])+"|");hu +=(get.gettext(hu_region[i])+"|");
        id +=(get.gettext(id_region[i])+"|");ie +=(get.gettext(ie_region[i])+"|");
        //    il +=(get.gettext(il_region[i])+"|");
        im +=(get.gettext(im_region[i])+"|");in1 +=(get.gettext(in_region[i])+"|");io +=(get.gettext(io_region[i])+"|");iq +=(get.gettext(iq_region[i])+"|");ir +=(get.gettext(ir_region[i])+"|");is +=(get.gettext(is_region[i])+"|");it +=(get.gettext(it_region[i])+"|");
        je +=(get.gettext(je_region[i])+"|");jm +=(get.gettext(jm_region[i])+"|");jo +=(get.gettext(jo_region[i])+"|");jp +=(get.gettext(jp_region[i])+"|");
        ke +=(get.gettext(ke_region[i])+"|");kg +=(get.gettext(kg_region[i])+"|");kh +=(get.gettext(kh_region[i])+"|");ki +=(get.gettext(ki_region[i])+"|");km +=(get.gettext(km_region[i])+"|");kn +=(get.gettext(kn_region[i])+"|");kp +=(get.gettext(kp_region[i])+"|");kr +=(get.gettext(kr_region[i])+"|");kw +=(get.gettext(kw_region[i])+"|");ky +=(get.gettext(ky_region[i])+"|");kz +=(get.gettext(kz_region[i])+"|");
        la +=(get.gettext(la_region[i])+"|");lb +=(get.gettext(lb_region[i])+"|");lc +=(get.gettext(lc_region[i])+"|");li +=(get.gettext(li_region[i])+"|");lk +=(get.gettext(lk_region[i])+"|");lr +=(get.gettext(lr_region[i])+"|");ls +=(get.gettext(ls_region[i])+"|");lt +=(get.gettext(lt_region[i])+"|");lu +=(get.gettext(lu_region[i])+"|");lv +=(get.gettext(lv_region[i])+"|");ly +=(get.gettext(ly_region[i])+"|");
        ma +=(get.gettext(ma_region[i])+"|");mc +=(get.gettext(mc_region[i])+"|");md +=(get.gettext(md_region[i])+"|");me +=(get.gettext(me_region[i])+"|");mf +=(get.gettext(mf_region[i])+"|");mg +=(get.gettext(mg_region[i])+"|");mh +=(get.gettext(mh_region[i])+"|");mk +=(get.gettext(mk_region[i])+"|");ml +=(get.gettext(ml_region[i])+"|");mm +=(get.gettext(mm_region[i])+"|");mn +=(get.gettext(mn_region[i])+"|");mo +=(get.gettext(mo_region[i])+"|");mp +=(get.gettext(mp_region[i])+"|");mq +=(get.gettext(mq_region[i])+"|");mr +=(get.gettext(mr_region[i])+"|");ms +=(get.gettext(ms_region[i])+"|");mt +=(get.gettext(mt_region[i])+"|");mu +=(get.gettext(mu_region[i])+"|");mv +=(get.gettext(mv_region[i])+"|");mw +=(get.gettext(mw_region[i])+"|");mx +=(get.gettext(mx_region[i])+"|");my +=(get.gettext(my_region[i])+"|");mz +=(get.gettext(mz_region[i])+"|");
        na +=(get.gettext(na_region[i])+"|");nc +=(get.gettext(nc_region[i])+"|");ne +=(get.gettext(ne_region[i])+"|");nf +=(get.gettext(nf_region[i])+"|");ng +=(get.gettext(ng_region[i])+"|");ni +=(get.gettext(ni_region[i])+"|");nl +=(get.gettext(nl_region[i])+"|");no +=(get.gettext(no_region[i])+"|");np +=(get.gettext(np_region[i])+"|");nr +=(get.gettext(nr_region[i])+"|");nu +=(get.gettext(nu_region[i])+"|");nz +=(get.gettext(nz_region[i])+"|");
        om +=(get.gettext(om_region[i])+"|");
        pa +=(get.gettext(pa_region[i])+"|");pe +=(get.gettext(pe_region[i])+"|");pf +=(get.gettext(pf_region[i])+"|");pg +=(get.gettext(pg_region[i])+"|");ph +=(get.gettext(ph_region[i])+"|");pk +=(get.gettext(pk_region[i])+"|");pl +=(get.gettext(pl_region[i])+"|");pm +=(get.gettext(pm_region[i])+"|");pn +=(get.gettext(pn_region[i])+"|");pr +=(get.gettext(pr_region[i])+"|");ps +=(get.gettext(ps_region[i])+"|");pt +=(get.gettext(pt_region[i])+"|");pw +=(get.gettext(pw_region[i])+"|");py +=(get.gettext(py_region[i])+"|");
        qa +=(get.gettext(qa_region[i])+"|");
        re +=(get.gettext(re_region[i])+"|");ro +=(get.gettext(ro_region[i])+"|");rs +=(get.gettext(rs_region[i])+"|");ru +=(get.gettext(ru_region[i])+"|");rw +=(get.gettext(rw_region[i])+"|");
        sa +=(get.gettext(sa_region[i])+"|");sb +=(get.gettext(sb_region[i])+"|");sc +=(get.gettext(sc_region[i])+"|");sd +=(get.gettext(sd_region[i])+"|");se +=(get.gettext(se_region[i])+"|");sg +=(get.gettext(sg_region[i])+"|");sh +=(get.gettext(sh_region[i])+"|");si +=(get.gettext(si_region[i])+"|");sj +=(get.gettext(sj_region[i])+"|");sk +=(get.gettext(sk_region[i])+"|");sl +=(get.gettext(sl_region[i])+"|");sm +=(get.gettext(sm_region[i])+"|");sn +=(get.gettext(sn_region[i])+"|");so +=(get.gettext(so_region[i])+"|");sr +=(get.gettext(sr_region[i])+"|");ss +=(get.gettext(ss_region[i])+"|");st +=(get.gettext(st_region[i])+"|");sv +=(get.gettext(sv_region[i])+"|");sx +=(get.gettext(sx_region[i])+"|");sy +=(get.gettext(sy_region[i])+"|");sz +=(get.gettext(sz_region[i])+"|");
        tc +=(get.gettext(tc_region[i])+"|");td +=(get.gettext(td_region[i])+"|");tf +=(get.gettext(tf_region[i])+"|");tg +=(get.gettext(tg_region[i])+"|");th +=(get.gettext(th_region[i])+"|");tj +=(get.gettext(tj_region[i])+"|");tk +=(get.gettext(tk_region[i])+"|");tl +=(get.gettext(tl_region[i])+"|");tm +=(get.gettext(tm_region[i])+"|");tn +=(get.gettext(tn_region[i])+"|");to +=(get.gettext(to_region[i])+"|");tr +=(get.gettext(tr_region[i])+"|");tt +=(get.gettext(tt_region[i])+"|");tv +=(get.gettext(tv_region[i])+"|");tw +=(get.gettext(tw_region[i])+"|");tz +=(get.gettext(tz_region[i])+"|");
        ua +=(get.gettext(ua_region[i])+"|");ug +=(get.gettext(ug_region[i])+"|");um +=(get.gettext(um_region[i])+"|");us +=(get.gettext(us_region[i])+"|");uy +=(get.gettext(uy_region[i])+"|");uz +=(get.gettext(uz_region[i])+"|");
        va +=(get.gettext(va_region[i])+"|");vc +=(get.gettext(vc_region[i])+"|");ve +=(get.gettext(ve_region[i])+"|");vg +=(get.gettext(vg_region[i])+"|");vi +=(get.gettext(vi_region[i])+"|");vn +=(get.gettext(vn_region[i])+"|");vu +=(get.gettext(vu_region[i])+"|");
        wf +=(get.gettext(wf_region[i])+"|");ws +=(get.gettext(ws_region[i])+"|");
        ye +=(get.gettext(ye_region[i])+"|");yt +=(get.gettext(yt_region[i])+"|");
        za +=(get.gettext(za_region[i])+"|");zm +=(get.gettext(zm_region[i])+"|");zw +=(get.gettext(zw_region[i])+"|");

    }

    var countriesList = '';
    $.each(countries, function (key, value) {
        countriesList += '<option value=' + this.code + ' data-short='+key+' data-code='+this.code+'>' + this.ar_name + '</option>';
    });

    $("#country-select").append(countriesList);
    var my_options = $("#country-select option");
    my_options.sort(function (a, b) {
        if (a.text > b.text) return 1;
        if (a.text < b.text) return -1;
        return 0
    });
    $("#country-select,#nationality-select").append(my_options);
    //to select the placeholder option
    var placeholder1 = $("#country-select option[value='']");
    $("#country-select").val(placeholder1);
    var placeholder2 = $("#nationality-select option[value='']");
    $("#nationality-select").val(placeholder2);

    $('#country-select').change(function () {
        //country code
        var shortname = $("option:selected", this).data("short");
        shortname = shortname.toLowerCase();
        var regions = [];
        var code_region = shortname + "_region";
        //count of regions in the selected country
        try{
            var len = eval(code_region).length;

            //translate regions into arabic
            for (var i = 0; i < len; i++) {
                regions += get.gettext(eval(shortname + "_region[" + i + "]")) + "|";
            }
            //put regions in array
            var regionsArr = regions.split("|");
            //remove the last empty item
            regionsArr.pop();
            regionsArr = regionsArr.sort();
            var j;
            // empty city select
            $('#city-select').empty();
            // add empty option for placeholder
            $('#city-select').append('<option disabled class="d-none" value=""></option>');
            for (j in regionsArr) {
                $('#city-select').append($('<option>', {
                    value: regionsArr[j],
                    text: regionsArr[j]
                }));
            }
            //to select the placeholder option
            var placeholder = $("#city-select option[value='']");
            $("#city-select").val(placeholder);
            $("#city-select").attr("placeholder", "الرجاء الاختيار");

            $('#city-select')[0].sumo.reload();
        }catch (e) {
            alert(e.message);
        }

    });
});