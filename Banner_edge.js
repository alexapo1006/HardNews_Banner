/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'typograph_proultralight': '<link rel=\"stylesheet\" href=\"stylesheet.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Soundtrack',
                            display: 'none',
                            volume: '0.15',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Soundtrack.mp3"],
                            preload: 'metadata'
                        },
                        {
                            id: 'xxxxx2',
                            display: 'block',
                            type: 'video',
                            tag: 'video',
                            rect: ['-701px', '-186px', '2401px', '622px', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            stroke: [1,"rgba(78,99,130,1.00)","none"],
                            source: [vid+"xxxxx.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'CPU_gif',
                            display: 'none',
                            type: 'image',
                            rect: ['-391px', '-225px', '981px', '553px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CPU_gif.gif",'0px','0px'],
                            transform: [[],[],[],['-0.16578','0.16573']]
                        },
                        {
                            id: 'CPU',
                            symbolName: 'Symbol_1',
                            display: 'block',
                            type: 'rect',
                            rect: ['69', '21px', '61', '398', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'GPU_gif',
                            display: 'none',
                            type: 'image',
                            rect: ['-13px', '-65px', '414px', '233px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"GPU_gif.gif",'0px','0px'],
                            transform: [[],[],[],['0.33904','0.33904']]
                        },
                        {
                            id: 'GPU',
                            symbolName: 'Symbol_2',
                            display: 'block',
                            type: 'rect',
                            rect: ['163', '21px', '61', '397', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'Cooling_gif',
                            display: 'none',
                            type: 'image',
                            rect: ['-225px', '-232px', '1000px', '563px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Cooling_gif.gif",'0px','0px'],
                            transform: [[],[],[],['0.17759','0.17759']]
                        },
                        {
                            id: 'Cooling',
                            symbolName: 'Symbol_3',
                            display: 'block',
                            type: 'rect',
                            rect: ['243', '21px', '62', '399', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'Desktops_gif',
                            display: 'none',
                            type: 'image',
                            rect: ['-125px', '-237px', '1000px', '563px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "0px", "0px"],
                            fill: ["rgba(0,0,0,0)",im+"Desktops_gif.gif",'0px','0px'],
                            transform: [[],[],[],['0.15295','0.15005']]
                        },
                        {
                            id: 'Desktops',
                            symbolName: 'Desktops',
                            display: 'block',
                            type: 'rect',
                            rect: ['327', '21px', '85', '397', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'Laptops_gif',
                            display: 'none',
                            type: 'image',
                            rect: ['-16px', '-241px', '1000px', '563px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Laptops_gif.gif",'0px','0px'],
                            transform: [[],[],[],['-0.17959','0.17957']]
                        },
                        {
                            id: 'Laptops',
                            symbolName: 'Laptops',
                            display: 'block',
                            type: 'rect',
                            rect: ['442', '21px', '84', '399', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'Games_gif2',
                            display: 'none',
                            type: 'image',
                            rect: ['95px', '-227px', '1000px', '563px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Games_gif.gif",'0px','0px'],
                            transform: [[],[],[],['0.20823','0.21373']]
                        },
                        {
                            id: 'Gaming',
                            symbolName: 'Gaming',
                            display: 'block',
                            type: 'rect',
                            rect: ['550', '21px', '90', '398', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'Software_gif',
                            display: 'none',
                            type: 'image',
                            rect: ['201px', '-224px', '1014px', '562px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Software_gif.gif",'0px','0px'],
                            transform: [[],[],[],['0.20648','0.20648']]
                        },
                        {
                            id: 'Software2',
                            symbolName: 'Software',
                            display: 'block',
                            type: 'rect',
                            rect: ['605', '-1px', '206', '420', 'auto', 'auto'],
                            overflow: 'hidden',
                            clip: 'rect(0px 162.9619140625px 420px 62.025390625px)'
                        },
                        {
                            id: 'Networking_gif',
                            display: 'none',
                            type: 'image',
                            rect: ['739px', '15px', '148px', '83px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Networking_gif.gif",'0px','0px']
                        },
                        {
                            id: 'Networks',
                            symbolName: 'Networks',
                            display: 'block',
                            type: 'rect',
                            rect: ['774', '21px', '77', '398', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'Security_gif',
                            display: 'none',
                            type: 'image',
                            rect: ['813px', '11px', '162px', '92px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Security_gif.gif",'0px','0px']
                        },
                        {
                            id: 'Security2',
                            symbolName: 'Security',
                            display: 'block',
                            type: 'rect',
                            rect: ['874', '21px', '40', '399', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'ContactG',
                            symbolName: 'ContactG',
                            type: 'rect',
                            rect: ['1000px', '210', '123', '40', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['-640px', '103px', '627px', '44px', 'auto', 'auto'],
                            overflow: 'hidden',
                            cursor: 'pointer',
                            text: "alexapo.worcestercomputing.com",
                            align: "center",
                            font: ['typograph_proultralight', [35, "px"], "rgba(255,255,255,1)", "700", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'fbook',
                            type: 'image',
                            rect: ['415px', '270px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'hidden',
                            cursor: 'pointer',
                            opacity: '0.65',
                            fill: ["rgba(0,0,0,0)",im+"fbook.png",'0px','0px']
                        },
                        {
                            id: 'gplus',
                            type: 'image',
                            rect: ['534px', '270px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'hidden',
                            cursor: 'pointer',
                            opacity: '0.65',
                            fill: ["rgba(0,0,0,0)",im+"gplus.png",'0px','0px']
                        },
                        {
                            id: 'Ytube',
                            type: 'image',
                            rect: ['474px', '270px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'hidden',
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Ytube.png",'0px','0px']
                        },
                        {
                            id: 'refresh',
                            type: 'image',
                            rect: ['1px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'hidden',
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"refresh.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1000px', '250px', 'auto', 'auto'],
                            sizeRange: ['','1000px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(78,99,130,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 30250,
                    autoPlay: true,
                    labels: {
                        "CONTACT": 21000,
                        "ROTATION": 29500
                    },
                    data: [
                        [
                            "eid837",
                            "top",
                            27250,
                            1000,
                            "swing",
                            "${Ytube}",
                            '270px',
                            '173px'
                        ],
                        [
                            "eid848",
                            "rotateZ",
                            29500,
                            750,
                            "swing",
                            "${refresh}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid817",
                            "display",
                            26000,
                            0,
                            "easeOutElastic",
                            "${Cooling}",
                            'block',
                            'none'
                        ],
                        [
                            "eid819",
                            "display",
                            26000,
                            0,
                            "easeOutElastic",
                            "${Laptops}",
                            'block',
                            'none'
                        ],
                        [
                            "eid436",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Networking_gif}",
                            'none',
                            'none'
                        ],
                        [
                            "eid438",
                            "display",
                            12000,
                            0,
                            "swing",
                            "${Networking_gif}",
                            'none',
                            'block'
                        ],
                        [
                            "eid440",
                            "display",
                            17000,
                            0,
                            "swing",
                            "${Networking_gif}",
                            'block',
                            'none'
                        ],
                        [
                            "eid841",
                            "top",
                            27500,
                            1000,
                            "swing",
                            "${fbook}",
                            '270px',
                            '173px'
                        ],
                        [
                            "eid821",
                            "display",
                            26000,
                            0,
                            "easeOutElastic",
                            "${Networks}",
                            'block',
                            'none'
                        ],
                        [
                            "eid854",
                            "left",
                            26000,
                            1000,
                            "easeOutElastic",
                            "${Text}",
                            '-640px',
                            '186px'
                        ],
                        [
                            "eid818",
                            "display",
                            26000,
                            0,
                            "easeOutElastic",
                            "${Desktops}",
                            'block',
                            'none'
                        ],
                        [
                            "eid412",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Cooling_gif}",
                            'none',
                            'none'
                        ],
                        [
                            "eid413",
                            "display",
                            7000,
                            0,
                            "swing",
                            "${Cooling_gif}",
                            'none',
                            'block'
                        ],
                        [
                            "eid414",
                            "display",
                            12000,
                            0,
                            "swing",
                            "${Cooling_gif}",
                            'block',
                            'none'
                        ],
                        [
                            "eid174",
                            "display",
                            5000,
                            0,
                            "easeOutBounce",
                            "${xxxxx2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid815",
                            "display",
                            26000,
                            0,
                            "easeOutElastic",
                            "${CPU}",
                            'block',
                            'none'
                        ],
                        [
                            "eid69",
                            "left",
                            4000,
                            1000,
                            "easeOutBounce",
                            "${xxxxx2}",
                            '-701px',
                            '-2401px'
                        ],
                        [
                            "eid424",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Games_gif2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid425",
                            "display",
                            10000,
                            0,
                            "swing",
                            "${Games_gif2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid427",
                            "display",
                            15000,
                            0,
                            "swing",
                            "${Games_gif2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid398",
                            "display",
                            0,
                            0,
                            "swing",
                            "${GPU_gif}",
                            'none',
                            'none'
                        ],
                        [
                            "eid409",
                            "display",
                            6000,
                            0,
                            "swing",
                            "${GPU_gif}",
                            'none',
                            'block'
                        ],
                        [
                            "eid410",
                            "display",
                            11000,
                            0,
                            "swing",
                            "${GPU_gif}",
                            'block',
                            'none'
                        ],
                        [
                            "eid403",
                            "display",
                            0,
                            0,
                            "swing",
                            "${CPU_gif}",
                            'none',
                            'none'
                        ],
                        [
                            "eid404",
                            "display",
                            5000,
                            0,
                            "swing",
                            "${CPU_gif}",
                            'none',
                            'block'
                        ],
                        [
                            "eid405",
                            "display",
                            10000,
                            0,
                            "swing",
                            "${CPU_gif}",
                            'block',
                            'none'
                        ],
                        [
                            "eid816",
                            "display",
                            26000,
                            0,
                            "easeOutElastic",
                            "${GPU}",
                            'block',
                            'none'
                        ],
                        [
                            "eid416",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Desktops_gif}",
                            'none',
                            'none'
                        ],
                        [
                            "eid417",
                            "display",
                            8000,
                            0,
                            "swing",
                            "${Desktops_gif}",
                            'none',
                            'block'
                        ],
                        [
                            "eid419",
                            "display",
                            13000,
                            0,
                            "swing",
                            "${Desktops_gif}",
                            'block',
                            'none'
                        ],
                        [
                            "eid839",
                            "opacity",
                            27500,
                            1000,
                            "swing",
                            "${gplus}",
                            '0.65',
                            '1'
                        ],
                        [
                            "eid840",
                            "top",
                            27500,
                            1000,
                            "swing",
                            "${gplus}",
                            '270px',
                            '173px'
                        ],
                        [
                            "eid847",
                            "left",
                            28750,
                            750,
                            "swing",
                            "${refresh}",
                            '-40px',
                            '1px'
                        ],
                        [
                            "eid420",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Laptops_gif}",
                            'none',
                            'none'
                        ],
                        [
                            "eid421",
                            "display",
                            9000,
                            0,
                            "swing",
                            "${Laptops_gif}",
                            'none',
                            'block'
                        ],
                        [
                            "eid423",
                            "display",
                            14000,
                            0,
                            "swing",
                            "${Laptops_gif}",
                            'block',
                            'none'
                        ],
                        [
                            "eid822",
                            "display",
                            26000,
                            0,
                            "easeOutElastic",
                            "${Security2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid814",
                            "display",
                            26000,
                            0,
                            "easeOutElastic",
                            "${Gaming}",
                            'block',
                            'none'
                        ],
                        [
                            "eid428",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Software_gif}",
                            'none',
                            'none'
                        ],
                        [
                            "eid429",
                            "display",
                            11000,
                            0,
                            "swing",
                            "${Software_gif}",
                            'none',
                            'block'
                        ],
                        [
                            "eid431",
                            "display",
                            16000,
                            0,
                            "swing",
                            "${Software_gif}",
                            'block',
                            'none'
                        ],
                        [
                            "eid441",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Security_gif}",
                            'none',
                            'none'
                        ],
                        [
                            "eid442",
                            "display",
                            13000,
                            0,
                            "swing",
                            "${Security_gif}",
                            'none',
                            'block'
                        ],
                        [
                            "eid443",
                            "display",
                            18000,
                            0,
                            "swing",
                            "${Security_gif}",
                            'block',
                            'none'
                        ],
                        [
                            "eid820",
                            "display",
                            26000,
                            0,
                            "easeOutElastic",
                            "${Software2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid836",
                            "opacity",
                            27250,
                            1000,
                            "swing",
                            "${Ytube}",
                            '0.6499999761581421',
                            '1'
                        ],
                        [
                            "eid842",
                            "opacity",
                            27500,
                            1000,
                            "swing",
                            "${fbook}",
                            '0.6499999761581421',
                            '1'
                        ],
                            [ "eid44", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${xxxxx2}', [0] ] ],
                            [ "eid856", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Soundtrack}', [] ] ],
                            [ "eid70", "trigger", 5000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${xxxxx2}', [] ] ]
                    ]
                }
            },
            "Symbol_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '61px', '61px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'CPU',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/CPU.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            align: 'left',
                            text: 'CPUs',
                            font: ['typograph_proultralight', [25, 'px'], 'rgba(237,202,49,1.00)', '900', 'none', '', 'break-word', 'normal'],
                            display: 'block',
                            type: 'text',
                            rect: ['-49px', '305px', '159px', '27px', 'auto', 'auto'],
                            id: 'TextCPU'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '61px', '398px']
                        }
                    }
                },
                timeline: {
                    duration: 22000,
                    autoPlay: true,
                    data: [
                        [
                            "eid130",
                            "display",
                            0,
                            0,
                            "swing",
                            "${CPU}",
                            'none',
                            'none'
                        ],
                        [
                            "eid395",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${CPU}",
                            'none',
                            'block'
                        ],
                        [
                            "eid654",
                            "display",
                            20750,
                            0,
                            "swing",
                            "${TextCPU}",
                            'block',
                            'none'
                        ],
                        [
                            "eid580",
                            "opacity",
                            10000,
                            0,
                            "swing",
                            "${CPU}",
                            '1',
                            '1'
                        ],
                        [
                            "eid577",
                            "opacity",
                            18000,
                            50,
                            "swing",
                            "${CPU}",
                            '1',
                            '0.65'
                        ],
                        [
                            "eid578",
                            "opacity",
                            18050,
                            500,
                            "swing",
                            "${CPU}",
                            '0.65',
                            '1'
                        ],
                        [
                            "eid446",
                            "top",
                            18050,
                            500,
                            "swing",
                            "${CPU}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid447",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${CPU}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid463",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${CPU}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid462",
                            "top",
                            20250,
                            500,
                            "swing",
                            "${CPU}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid668",
                            "top",
                            21000,
                            1000,
                            "swing",
                            "${CPU}",
                            '0px',
                            '-120px'
                        ],
                        [
                            "eid451",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${TextCPU}",
                            '305px',
                            '136px'
                        ],
                        [
                            "eid464",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${TextCPU}",
                            '136px',
                            '306px'
                        ]
                    ]
                }
            },
            "Symbol_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '61px', '61px', 'auto', 'auto'],
                            type: 'image',
                            overflow: 'hidden',
                            id: 'GPU',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/GPU.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            align: 'left',
                            text: 'GPUs',
                            rect: ['-49px', '304px', '159px', '27px', 'auto', 'auto'],
                            display: 'block',
                            id: 'TextGPU',
                            font: ['typograph_proultralight', [25, 'px'], 'rgba(237,202,49,1.00)', '900', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '61px', '397px']
                        }
                    }
                },
                timeline: {
                    duration: 22500,
                    autoPlay: true,
                    data: [
                        [
                            "eid653",
                            "display",
                            20750,
                            0,
                            "swing",
                            "${TextGPU}",
                            'block',
                            'none'
                        ],
                        [
                            "eid142",
                            "display",
                            0,
                            0,
                            "swing",
                            "${GPU}",
                            'none',
                            'none'
                        ],
                        [
                            "eid411",
                            "display",
                            11000,
                            0,
                            "swing",
                            "${GPU}",
                            'none',
                            'block'
                        ],
                        [
                            "eid544",
                            "opacity",
                            11000,
                            0,
                            "swing",
                            "${GPU}",
                            '1',
                            '1'
                        ],
                        [
                            "eid575",
                            "opacity",
                            18000,
                            50,
                            "swing",
                            "${GPU}",
                            '1',
                            '0.65'
                        ],
                        [
                            "eid576",
                            "opacity",
                            18050,
                            500,
                            "swing",
                            "${GPU}",
                            '0.65',
                            '1'
                        ],
                        [
                            "eid472",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${TextGPU}",
                            '304px',
                            '127px'
                        ],
                        [
                            "eid476",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${TextGPU}",
                            '127px',
                            '304px'
                        ],
                        [
                            "eid465",
                            "top",
                            18050,
                            500,
                            "swing",
                            "${GPU}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid466",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${GPU}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid468",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${GPU}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid467",
                            "top",
                            20250,
                            500,
                            "swing",
                            "${GPU}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid671",
                            "top",
                            21500,
                            1000,
                            "swing",
                            "${GPU}",
                            '0px',
                            '-120px'
                        ]
                    ]
                }
            },
            "Symbol_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '62px', '61px', 'auto', 'auto'],
                            type: 'image',
                            overflow: 'hidden',
                            id: 'Cooling',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Cooling.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            align: 'left',
                            text: 'COOLING',
                            rect: ['-48px', '306px', '159px', '27px', 'auto', 'auto'],
                            display: 'block',
                            id: 'TextCooling',
                            font: ['typograph_proultralight', [25, 'px'], 'rgba(237,202,49,1.00)', '900', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '62px', '399px']
                        }
                    }
                },
                timeline: {
                    duration: 23000,
                    autoPlay: true,
                    data: [
                        [
                            "eid652",
                            "display",
                            20750,
                            0,
                            "swing",
                            "${TextCooling}",
                            'block',
                            'none'
                        ],
                        [
                            "eid509",
                            "opacity",
                            12000,
                            0,
                            "swing",
                            "${Cooling}",
                            '1',
                            '1'
                        ],
                        [
                            "eid573",
                            "opacity",
                            18000,
                            50,
                            "swing",
                            "${Cooling}",
                            '1',
                            '0.65'
                        ],
                        [
                            "eid574",
                            "opacity",
                            18050,
                            500,
                            "swing",
                            "${Cooling}",
                            '0.65',
                            '1'
                        ],
                        [
                            "eid497",
                            "top",
                            18050,
                            500,
                            "swing",
                            "${Cooling}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid498",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${Cooling}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid513",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${Cooling}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid514",
                            "top",
                            20250,
                            500,
                            "swing",
                            "${Cooling}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid674",
                            "top",
                            22000,
                            1000,
                            "swing",
                            "${Cooling}",
                            '0px',
                            '-120px'
                        ],
                        [
                            "eid518",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${TextCooling}",
                            '306px',
                            '139px'
                        ],
                        [
                            "eid519",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${TextCooling}",
                            '139px',
                            '306px'
                        ],
                        [
                            "eid143",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Cooling}",
                            'none',
                            'none'
                        ],
                        [
                            "eid415",
                            "display",
                            12000,
                            0,
                            "swing",
                            "${Cooling}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Desktops": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '85px', '61px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Desktops',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Desktops.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'TextDesktops',
                            text: 'DESKTOPS',
                            rect: ['-42px', '130px', '159px', '27px', 'auto', 'auto'],
                            align: 'left',
                            overflow: 'hidden',
                            display: 'block',
                            font: ['typograph_proultralight', [25, 'px'], 'rgba(237,202,49,1.00)', '900', 'none', '', 'break-word', 'normal'],
                            textStyle: ['0px', '', '', ''],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '85px', '397px']
                        }
                    }
                },
                timeline: {
                    duration: 23500,
                    autoPlay: true,
                    data: [
                        [
                            "eid651",
                            "display",
                            20750,
                            0,
                            "swing",
                            "${TextDesktops}",
                            'block',
                            'none'
                        ],
                        [
                            "eid520",
                            "top",
                            18050,
                            500,
                            "swing",
                            "${Desktops}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid521",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${Desktops}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid522",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${Desktops}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid523",
                            "top",
                            20250,
                            500,
                            "swing",
                            "${Desktops}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid676",
                            "top",
                            22500,
                            1000,
                            "swing",
                            "${Desktops}",
                            '0px',
                            '-120px'
                        ],
                        [
                            "eid148",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Desktops}",
                            'none',
                            'none'
                        ],
                        [
                            "eid418",
                            "display",
                            13000,
                            0,
                            "swing",
                            "${Desktops}",
                            'none',
                            'block'
                        ],
                        [
                            "eid528",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${TextDesktops}",
                            '304px',
                            '130px'
                        ],
                        [
                            "eid529",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${TextDesktops}",
                            '130px',
                            '304px'
                        ],
                        [
                            "eid581",
                            "opacity",
                            13000,
                            0,
                            "swing",
                            "${Desktops}",
                            '1',
                            '1'
                        ],
                        [
                            "eid568",
                            "opacity",
                            18000,
                            50,
                            "swing",
                            "${Desktops}",
                            '1',
                            '0.65'
                        ],
                        [
                            "eid566",
                            "opacity",
                            18050,
                            500,
                            "swing",
                            "${Desktops}",
                            '0.65',
                            '1'
                        ]
                    ]
                }
            },
            "Laptops": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '84px', '58px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Laptops',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Laptops.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'TextLaptops',
                            text: 'LAPTOPS',
                            rect: ['-37px', '306px', '159px', '27px', 'auto', 'auto'],
                            align: 'left',
                            overflow: 'hidden',
                            display: 'block',
                            font: ['typograph_proultralight', [25, 'px'], 'rgba(237,202,49,1.00)', '900', 'none', '', 'break-word', 'normal'],
                            textStyle: ['0px', '', '', ''],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '84px', '399px']
                        }
                    }
                },
                timeline: {
                    duration: 24000,
                    autoPlay: true,
                    data: [
                        [
                            "eid569",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${TextLaptops}",
                            '306px',
                            '136px'
                        ],
                        [
                            "eid570",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${TextLaptops}",
                            '136px',
                            '306px'
                        ],
                        [
                            "eid149",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Laptops}",
                            'none',
                            'none'
                        ],
                        [
                            "eid422",
                            "display",
                            14000,
                            0,
                            "swing",
                            "${Laptops}",
                            'none',
                            'block'
                        ],
                        [
                            "eid582",
                            "opacity",
                            14000,
                            0,
                            "swing",
                            "${Laptops}",
                            '1',
                            '1'
                        ],
                        [
                            "eid571",
                            "opacity",
                            18000,
                            50,
                            "swing",
                            "${Laptops}",
                            '1',
                            '0.65'
                        ],
                        [
                            "eid572",
                            "opacity",
                            18050,
                            500,
                            "swing",
                            "${Laptops}",
                            '0.65',
                            '1'
                        ],
                        [
                            "eid549",
                            "top",
                            18050,
                            500,
                            "swing",
                            "${Laptops}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid550",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${Laptops}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid551",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${Laptops}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid552",
                            "top",
                            20250,
                            500,
                            "swing",
                            "${Laptops}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid678",
                            "top",
                            23000,
                            1000,
                            "swing",
                            "${Laptops}",
                            '0px',
                            '-120px'
                        ],
                        [
                            "eid650",
                            "display",
                            20750,
                            0,
                            "swing",
                            "${TextLaptops}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Software": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '206px', '116px', 'auto', 'auto'],
                            type: 'image',
                            display: 'none',
                            id: 'Software',
                            opacity: '1',
                            clip: 'rect(0px 164.22802734375px 116px 60.759765625px)',
                            fill: ['rgba(0,0,0,0)', 'images/Software.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: 'SOFTWARE',
                            rect: ['23px', '327px', '159px', '27px', 'auto', 'auto'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            display: 'block',
                            textStyle: ['0px', '', '', ''],
                            font: ['typograph_proultralight', [24, 'px'], 'rgba(237,202,49,1.00)', '900', 'none', '', 'break-word', 'normal'],
                            id: 'TextSoftware'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '206px', '420px']
                        }
                    }
                },
                timeline: {
                    duration: 25000,
                    autoPlay: true,
                    data: [
                        [
                            "eid590",
                            "opacity",
                            16000,
                            0,
                            "swing",
                            "${Software}",
                            '1',
                            '1'
                        ],
                        [
                            "eid591",
                            "opacity",
                            18000,
                            50,
                            "swing",
                            "${Software}",
                            '1',
                            '0.65'
                        ],
                        [
                            "eid592",
                            "opacity",
                            18050,
                            500,
                            "swing",
                            "${Software}",
                            '0.65',
                            '1'
                        ],
                        [
                            "eid432",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Software}",
                            'none',
                            'none'
                        ],
                        [
                            "eid433",
                            "display",
                            16000,
                            0,
                            "swing",
                            "${Software}",
                            'none',
                            'block'
                        ],
                        [
                            "eid648",
                            "display",
                            20750,
                            0,
                            "swing",
                            "${TextSoftware}",
                            'block',
                            'none'
                        ],
                        [
                            "eid583",
                            "top",
                            18050,
                            500,
                            "swing",
                            "${Software}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid584",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${Software}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid585",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${Software}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid586",
                            "top",
                            20250,
                            500,
                            "swing",
                            "${Software}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid683",
                            "top",
                            24000,
                            1000,
                            "swing",
                            "${Software}",
                            '0px',
                            '-120px'
                        ],
                        [
                            "eid588",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${TextSoftware}",
                            '327px',
                            '157px'
                        ],
                        [
                            "eid589",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${TextSoftware}",
                            '157px',
                            '327px'
                        ]
                    ]
                }
            },
            "Gaming": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '90px', '61px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Games',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Games.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'TextGaming',
                            text: 'GAMING',
                            rect: ['-34px', '136px', '159px', '27px', 'auto', 'auto'],
                            align: 'left',
                            overflow: 'hidden',
                            display: 'block',
                            font: ['typograph_proultralight', [25, 'px'], 'rgba(237,202,49,1.00)', '900', 'none', '', 'break-word', 'normal'],
                            textStyle: ['0px', '', '', ''],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '398px']
                        }
                    }
                },
                timeline: {
                    duration: 24500,
                    autoPlay: true,
                    data: [
                        [
                            "eid649",
                            "display",
                            20750,
                            0,
                            "swing",
                            "${TextGaming}",
                            'block',
                            'none'
                        ],
                        [
                            "eid601",
                            "opacity",
                            15000,
                            0,
                            "swing",
                            "${Games}",
                            '1',
                            '1'
                        ],
                        [
                            "eid595",
                            "opacity",
                            18000,
                            50,
                            "swing",
                            "${Games}",
                            '1',
                            '0.65'
                        ],
                        [
                            "eid596",
                            "opacity",
                            18050,
                            500,
                            "swing",
                            "${Games}",
                            '0.65',
                            '1'
                        ],
                        [
                            "eid593",
                            "top",
                            18050,
                            500,
                            "swing",
                            "${Games}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid594",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${Games}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid597",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${Games}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid598",
                            "top",
                            20250,
                            500,
                            "swing",
                            "${Games}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid681",
                            "top",
                            23500,
                            1000,
                            "swing",
                            "${Games}",
                            '0px',
                            '-120px'
                        ],
                        [
                            "eid150",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Games}",
                            'none',
                            'none'
                        ],
                        [
                            "eid426",
                            "display",
                            15000,
                            0,
                            "swing",
                            "${Games}",
                            'none',
                            'block'
                        ],
                        [
                            "eid599",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${TextGaming}",
                            '305px',
                            '136px'
                        ],
                        [
                            "eid600",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${TextGaming}",
                            '136px',
                            '305px'
                        ]
                    ]
                }
            },
            "Networks": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '77px', '70px', 'auto', 'auto'],
                            type: 'image',
                            overflow: 'visible',
                            id: 'Networking',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Networking.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: 'NETWORKS',
                            rect: ['-41px', '305px', '159px', '27px', 'auto', 'auto'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            display: 'block',
                            textStyle: ['0px', '', '', ''],
                            font: ['typograph_proultralight', [23, 'px'], 'rgba(237,202,49,1.00)', '900', 'none', '', 'break-word', 'normal'],
                            id: 'TextNetworking'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '77px', '398px']
                        }
                    }
                },
                timeline: {
                    duration: 25500,
                    autoPlay: true,
                    data: [
                        [
                            "eid647",
                            "display",
                            20750,
                            0,
                            "swing",
                            "${TextNetworking}",
                            'block',
                            'none'
                        ],
                        [
                            "eid613",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${TextNetworking}",
                            '305px',
                            '136px'
                        ],
                        [
                            "eid614",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${TextNetworking}",
                            '136px',
                            '305px'
                        ],
                        [
                            "eid606",
                            "opacity",
                            17000,
                            0,
                            "swing",
                            "${Networking}",
                            '1',
                            '1'
                        ],
                        [
                            "eid604",
                            "opacity",
                            18000,
                            50,
                            "swing",
                            "${Networking}",
                            '1',
                            '0.65'
                        ],
                        [
                            "eid605",
                            "opacity",
                            18050,
                            500,
                            "swing",
                            "${Networking}",
                            '0.65',
                            '1'
                        ],
                        [
                            "eid146",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Networking}",
                            'none',
                            'none'
                        ],
                        [
                            "eid434",
                            "display",
                            17000,
                            0,
                            "swing",
                            "${Networking}",
                            'block',
                            'block'
                        ],
                        [
                            "eid602",
                            "top",
                            18050,
                            500,
                            "swing",
                            "${Networking}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid603",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${Networking}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid611",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${Networking}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid612",
                            "top",
                            20250,
                            500,
                            "swing",
                            "${Networking}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid685",
                            "top",
                            24500,
                            1000,
                            "swing",
                            "${Networking}",
                            '0px',
                            '-120px'
                        ]
                    ]
                }
            },
            "Security": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '40px', '70px', 'auto', 'auto'],
                            type: 'image',
                            overflow: 'hidden',
                            id: 'Security',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Security.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: 'SECURITY',
                            rect: ['-60px', '306px', '159px', '27px', 'auto', 'auto'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            display: 'block',
                            textStyle: ['0px', '', '', ''],
                            font: ['typograph_proultralight', [25, 'px'], 'rgba(237,202,49,1.00)', '900', 'none', '', 'break-word', 'normal'],
                            id: 'TextSecurity'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '40px', '399px']
                        }
                    }
                },
                timeline: {
                    duration: 26000,
                    autoPlay: true,
                    data: [
                        [
                            "eid617",
                            "opacity",
                            18000,
                            50,
                            "swing",
                            "${Security}",
                            '1',
                            '0.65'
                        ],
                        [
                            "eid618",
                            "opacity",
                            18050,
                            500,
                            "swing",
                            "${Security}",
                            '0.65',
                            '1'
                        ],
                        [
                            "eid144",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Security}",
                            'none',
                            'none'
                        ],
                        [
                            "eid444",
                            "display",
                            18000,
                            0,
                            "swing",
                            "${Security}",
                            'none',
                            'block'
                        ],
                        [
                            "eid646",
                            "display",
                            20750,
                            0,
                            "swing",
                            "${TextSecurity}",
                            'block',
                            'none'
                        ],
                        [
                            "eid615",
                            "top",
                            18050,
                            500,
                            "swing",
                            "${Security}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid616",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${Security}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid619",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${Security}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid620",
                            "top",
                            20250,
                            500,
                            "swing",
                            "${Security}",
                            '163px',
                            '0px'
                        ],
                        [
                            "eid687",
                            "top",
                            25000,
                            1000,
                            "swing",
                            "${Security}",
                            '0px',
                            '-120px'
                        ],
                        [
                            "eid622",
                            "top",
                            18550,
                            500,
                            "swing",
                            "${TextSecurity}",
                            '306px',
                            '136px'
                        ],
                        [
                            "eid623",
                            "top",
                            19750,
                            500,
                            "swing",
                            "${TextSecurity}",
                            '136px',
                            '306px'
                        ]
                    ]
                }
            },
            "ContactG": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['typograph_proultralight', [20, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(237, 202, 49)', 'italic', 'break-word', 'normal'],
                            type: 'text',
                            overflow: 'hidden',
                            id: 'TextContact',
                            text: 'CONTACT',
                            align: 'left',
                            rect: ['0px', '10px', '123px', '20px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            overflow: 'visible',
                            id: 'contact2',
                            rect: ['-40px', '0px', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/contact.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '123px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 19000,
                    autoPlay: true,
                    data: [
                        [
                            "eid642",
                            "left",
                            17000,
                            750,
                            "swing",
                            "${contact2}",
                            '0px',
                            '-40px'
                        ],
                        [
                            "eid776",
                            "left",
                            18000,
                            500,
                            "swing",
                            "${TextContact}",
                            '0px',
                            '-157px'
                        ],
                        [
                            "eid645",
                            "left",
                            18500,
                            500,
                            "swing",
                            "${TextContact}",
                            '-157px',
                            '0px'
                        ]
                    ]
                }
            },
            "AfterClick": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            id: 'Text',
                            text: 'alexapo.worcestercomputing.com',
                            cursor: 'pointer',
                            rect: ['-37px', '104px', '627px', '44px', 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'none',
                            align: 'center',
                            font: ['typograph_proultralight', [35, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'italic', 'break-word', '']
                        },
                        {
                            type: 'image',
                            rect: ['561px', '0px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'refresh',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/refresh.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['1032', '271px', '40px', '40px', 'auto', 'auto'],
                            id: 'fbook',
                            overflow: 'hidden',
                            display: 'none',
                            opacity: '0.65',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/fbook.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['1151', '271px', '40px', '40px', 'auto', 'auto'],
                            id: 'gplus',
                            overflow: 'hidden',
                            display: 'none',
                            opacity: '0.65',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/gplus.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            overflow: 'hidden',
                            id: 'Ytube',
                            rect: ['1091px', '271px', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Ytube.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1663px', '445px']
                        }
                    }
                },
                timeline: {
                    duration: 30250,
                    autoPlay: false,
                    data: [
                        [
                            "eid716",
                            "top",
                            28750,
                            750,
                            "swing",
                            "${refresh}",
                            '0px',
                            '8px'
                        ],
                        [
                            "eid788",
                            "top",
                            27250,
                            1000,
                            "swing",
                            "${Ytube}",
                            '271px',
                            '173px'
                        ],
                        [
                            "eid757",
                            "rotateZ",
                            29500,
                            750,
                            "swing",
                            "${refresh}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid744",
                            "display",
                            0,
                            0,
                            "swing",
                            "${refresh}",
                            'none',
                            'none'
                        ],
                        [
                            "eid777",
                            "display",
                            21000,
                            0,
                            "swing",
                            "${refresh}",
                            'none',
                            'block'
                        ],
                        [
                            "eid813",
                            "display",
                            21000,
                            0,
                            "swing",
                            "${fbook}",
                            'none',
                            'block'
                        ],
                        [
                            "eid791",
                            "top",
                            27500,
                            1000,
                            "swing",
                            "${fbook}",
                            '271px',
                            '173px'
                        ],
                        [
                            "eid715",
                            "left",
                            28750,
                            750,
                            "swing",
                            "${refresh}",
                            '561px',
                            '606px'
                        ],
                        [
                            "eid706",
                            "left",
                            26000,
                            1000,
                            "easeOutElastic",
                            "${Text}",
                            '-37px',
                            '817px'
                        ],
                        [
                            "eid812",
                            "display",
                            21000,
                            0,
                            "swing",
                            "${gplus}",
                            'none',
                            'block'
                        ],
                        [
                            "eid748",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid781",
                            "display",
                            21000,
                            0,
                            "swing",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid790",
                            "display",
                            21000,
                            0,
                            "swing",
                            "${Ytube}",
                            'none',
                            'block'
                        ],
                        [
                            "eid796",
                            "opacity",
                            27500,
                            1000,
                            "swing",
                            "${gplus}",
                            '0.65',
                            '1'
                        ],
                        [
                            "eid794",
                            "top",
                            27500,
                            1000,
                            "swing",
                            "${gplus}",
                            '271px',
                            '173px'
                        ],
                        [
                            "eid789",
                            "opacity",
                            27250,
                            1000,
                            "swing",
                            "${Ytube}",
                            '0.6499999761581421',
                            '1'
                        ],
                        [
                            "eid793",
                            "opacity",
                            27500,
                            1000,
                            "swing",
                            "${fbook}",
                            '0.6499999761581421',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Banner_edgeActions.js");
})("EDGE-623152221");
