// Generating my CV with docx
const docx = require('docx');
const express = require("express");
const app = express(exports);

const PHONE_NUMBER = "07534563401";
const PROFILE_URL = "https://www.linkedin.com/in/dolan1";
const EMAIL = "docx@com";

const { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TabStopPosition, TabStopType, TextRun } = docx;

const experiences = [
    {
        isCurrent: true,
        summary: "Full-stack developer working with Angular and Java. Working for the iShares platform",
        title: "Associate Software Developer",
        startDate: {
            month: 11,
            year: 2017,
        },
        company: {
            name: "BlackRock",
        },
    },
    {
        isCurrent: false,
        summary:
            "Full-stack developer working with Angular, Node and TypeScript. Working for the iShares platform. Emphasis on Dev-ops and developing the continous integration pipeline.",
        title: "Software Developer",
        endDate: {
            month: 11,
            year: 2017,
        },
        startDate: {
            month: 10,
            year: 2016,
        },
        company: {
            name: "Torch Markets",
        },
    },
    {
        isCurrent: false,
        summary:
            "Used ASP.NET MVC 5 to produce a diversity data collection tool for the future of British television.\n\nUsed AngularJS and C# best practices. Technologies used include JavaScript, ASP.NET MVC 5, SQL, Oracle, SASS, Bootstrap, Grunt.",
        title: "Software Developer",
        endDate: {
            month: 10,
            year: 2016,
        },
        startDate: {
            month: 3,
            year: 2015,
        },
        company: {
            name: "Soundmouse",
        },
    },
    {
        isCurrent: false,
        summary:
            "Develop web commerce platforms for constious high profile clients.\n\nCreated a log analysis web application with the Play Framework in Java, incorporating Test Driven Development. It asynchronously uploads and processes large (2 GB) log files, and outputs meaningful results in context with the problem. \n\nAnalysis  and  development  of  the payment system infrastructure and user accounts section to be used by several clients of the company such as Waitrose, Tally Weijl, DJ Sports, Debenhams, Ann Summers, John Lewis and others.\n\nTechnologies used include WebSphere Commerce, Java, JavaScript and JSP.",
        title: "Java Developer",
        endDate: {
            month: 10,
            year: 2014,
        },
        startDate: {
            month: 3,
            year: 2013,
        },
        company: {
            name: "Soundmouse",
        },
    },
];

const education = [
    {
        degree: "Master of Science (MSc)",
        fieldOfStudy: "Computer Science",
        notes:
            "Exam Results: 1st Class with Distinction, Dissertation: 1st Class with Distinction\n\nRelevant Courses: Java and C# Programming, Software Engineering, Artificial Intelligence, \nComputational Photography, Algorithmics, Architecture and Hardware.\n\nCreated a Windows 8 game in JavaScript for the dissertation. \n\nCreated an award-winning 3D stereoscopic game in C# using XNA.",
        schoolName: "University College London",
        startDate: {
            year: 2012,
        },
        endDate: {
            year: 2013,
        },
    },
    {
        degree: "Bachelor of Engineering (BEng)",
        fieldOfStudy: "Material Science and Engineering",
        notes:
            "Exam Results: 2:1, Dissertation: 1st Class with Distinction\n\nRelevant courses: C Programming, Mathematics and Business for Engineers.",
        schoolName: "Imperial College London",
        startDate: {
            year: 2009,
        },
        endDate: {
            year: 2012,
        },
    },
];

const skills = [
    {
        name: "Angular",
    },
    {
        name: "TypeScript",
    },
    {
        name: "JavaScript",
    },
    {
        name: "NodeJS",
    },
];

const achievements = [
    {
        issuer: "Oracle",
        name: "Oracle Certified Expert",
    },
];


class DocumentCreator {
    create([experiences, educations, skills, achivements]) {
        const document = new Document({
        creator: "Clippy",
        title: "Sample Document",
        description: "A brief example of using docx",
        styles: {
            paragraphStyles: [
                {
                    id: "Heading1",
                    name: "Heading 1",
                    basedOn: "Normal",
                    next: "Normal",
                    quickFormat: true,
                    run: {
                        size: 24,
                        bold: true,
                        italics: false,
                        color: "black",
                        font:"Arial"
                    },
                    paragraph: {
                        spacing: {
                            after: 120,
                        },
                    },
                },
                {
                    id: "Heading2",
                    name: "Heading 2",
                    basedOn: "Normal",
                    next: "Normal",
                    quickFormat: true,
                    run: {
                        size: 30,
                        bold: false,
                        italics: false,
                        color: "black",
                        font:"Arial"
                    },
                    paragraph: {
                        spacing: {
                            after: 120,
                        },
                    },
                },
                {
                    id: "normaltext",
                    name: "normaltext",
                    basedOn: "Normal",
                    next: "Normal",
                    quickFormat: true,
                    run: {
                        size: 24,
                        bold: false,
                        italics: false,
                        color: "black",
                        font:"Arial"
                    },
                    paragraph: {
                        spacing: {
                            after: 0,
                        },
                    },
                },
                {
                    id: "aside",
                    name: "Aside",
                    basedOn: "Normal",
                    next: "Normal",
                    run: {
                        color: "999999",
                        italics: true,
                    },
                    paragraph: {
                        indent: {
                            left: 720,
                        },
                        spacing: {
                            line: 276,
                        },
                    },
                },
                {
                    id: "wellSpaced",
                    name: "Well Spaced",
                    basedOn: "Normal",
                    quickFormat: true,
                    paragraph: {
                        spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
                    },
                },
                {
                    id: "ListParagraph",
                    name: "List Paragraph",
                    basedOn: "Normal",
                    quickFormat: true,
                },
            ],
        },
        numbering: {
            config: [
                {
                    reference: "my-crazy-numbering",
                    levels: [
                        {
                            level: 0,
                            format: "decimal",
                            text: "%1.",
                            alignment: AlignmentType.LEFT,
                        },
                        {
                            level: 1,
                            format: "decimal",
                            text: "%2.",
                            alignment: AlignmentType.LEFT,
                        },
                        {
                            level: 2,
                            format: "lowerLetter",
                            text: "%3.",
                            alignment: AlignmentType.START,
                            style: {
                                paragraph: {
                                    indent: { left: 720, hanging: 260 },
                                },
                            },
                        },
                        {
                            level: 3,
                            format: "decimal",
                            text: "%4.",
                            alignment: AlignmentType.LEFT,
                        },
                        {
                            level: 4,
                            format: "decimal",
                            text: "%5.",
                            alignment: AlignmentType.LEFT,
                        },
                        {
                            level: 5,
                            format: "decimal",
                            text: "%6.",
                            alignment: AlignmentType.LEFT,
                        },
                        {
                            level: 6,
                            format: "decimal",
                            text: "%7.",
                            alignment: AlignmentType.LEFT,
                        },
                        {
                            level: 7,
                            format: "decimal",
                            text: "%8.",
                            alignment: AlignmentType.LEFT,
                        },
                        {
                            level: 8,
                            format: "decimal",
                            text: "%9.",
                            alignment: AlignmentType.LEFT,
                        },
                        {
                            level: 9,
                            format: "decimal",
                            text: "%9.",
                            alignment: AlignmentType.LEFT,
                        },
                    ],
                },
            ],
        },
    });

        document.addSection({
            children: [
            this.createContractTitle('12345678'),
            ...this.createContractProfile('Reza'),
            ...this.createPasal1(),
            ...this.createPasal2(),
            ...this.createPasal3('10-02-2020', '20-02-2021'),
            ...this.createPasal4('50 juta', 40, '05-06-2020', 40, '05-08-2020', '35 juta', '5 juta', '5 juta', '5 juta'),
            ...this.createPasal5('300 ribu', 'blablabla' ),
            ...this.createPasal6('1 juta', '2 juta'),
            ...this.createPasal7(),
            ...this.createPasal8(),
            ...this.createPasal9(),
            ...this.createKeadaanDarurat(),
            ...this.createPasal10(),
            ...this.createPasal11(),
                // new Paragraph({
                //     text: "Dolan Miu",
                //     heading: HeadingLevel.TITLE,
                // }),
                // this.createContactInfo(PHONE_NUMBER, PROFILE_URL, EMAIL),
                // this.createHeading("Education"),
                // ...educations
                //     .map((education) => {
                //         const arr = [];
                //         arr.push(
                //             this.createInstitutionHeader(education.schoolName, `${education.startDate.year} - ${education.endDate.year}`),
                //         );
                //         arr.push(this.createRoleText(`${education.fieldOfStudy} - ${education.degree}`));

                //         const bulletPoints = this.splitParagraphIntoBullets(education.notes);
                //         bulletPoints.forEach((bulletPoint) => {
                //             arr.push(this.createBullet(bulletPoint));
                //         });

                //         return arr;
                //     })
                //     .reduce((prev, curr) => prev.concat(curr), []),
                // this.createHeading("Experience"),
                // ...experiences
                //     .map((position) => {
                //         const arr = [];

                //         arr.push(
                //             this.createInstitutionHeader(
                //                 position.company.name,
                //                 this.createPositionDateText(position.startDate, position.endDate, position.isCurrent),
                //             ),
                //         );
                //         arr.push(this.createRoleText(position.title));

                //         const bulletPoints = this.splitParagraphIntoBullets(position.summary);

                //         bulletPoints.forEach((bulletPoint) => {
                //             arr.push(this.createBullet(bulletPoint));
                //         });

                //         return arr;
                //     })
                //     .reduce((prev, curr) => prev.concat(curr), []),
                // this.createHeading("Skills, Achievements and Interests"),
                // this.createSubHeading("Skills"),
                // this.createSkillList(skills),
                // this.createSubHeading("Achievements"),
                // ...this.createAchivementsList(achivements),
                // this.createSubHeading("Interests"),
                // this.createInterests("Programming, Technology, Music Production, Web Design, 3D Modelling, Dancing."),
                // this.createHeading("References"),
                // new Paragraph(
                //     "Dr. Dean Mohamedally Director of Postgraduate Studies Department of Computer Science, University College London Malet Place, Bloomsbury, London WC1E d.mohamedally@ucl.ac.uk",
                // ),
                // new Paragraph("More references upon request"),
                // new Paragraph({
                //     text: "This CV was generated in real-time based on my Linked-In profile from my personal website www.dolan.bio.",
                //     alignment: AlignmentType.CENTER,
                // }),
            ],
        });

        return document;
    }
    
    createContractTitle(contractNo){
    return[
        new Paragraph({
        alignment: AlignmentType.CENTER,
        heading: HeadingLevel.HEADING_2,
        children:[
        new TextRun({
            text:`Perjanjian Kerja`,
            bold:true
        })
    ]
}),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            style:"normaltext",
            children:[
            new TextRun({
                text:`No.:${contractNo}`,
            }),
            new TextRun(``).break(),
        ],
    })
    ]
    }

    createContractProfile(pemberiKerja){
        return [
            new Paragraph({
            style:"normaltext",
            text:`Pada hari ini, 17 Agustus 1945 bertempat di bogor`
            }),
            new Paragraph({
            style:"normaltext",
            tabStops: [
                {
                    type: TabStopType.CENTER,
                    position: 2450,
                },
            ],
            children:[
                new TextRun(`Nama`),
                new TextRun(`\t:`),
            ],
         
        }),
        new Paragraph({
            style:"normaltext",
            tabStops: [
                {
                    type: TabStopType.CENTER,
                    position: 2450,
                },
            ],
            children:[
                new TextRun(`NIK`),
                new TextRun(`\t:`),
            ],
         
        }),
        new Paragraph({
            style:"normaltext",
            tabStops: [
                {
                    type: TabStopType.CENTER,
                    position: 2450,
                },
            ],
            children:[
                new TextRun(`NPWP`),
                new TextRun(`\t:`),
            ],
         
        }),
        new Paragraph({
            style:"normaltext",
            tabStops: [
                {
                    type: TabStopType.CENTER,
                    position: 2450,
                },
            ],
            children:[
                new TextRun(`Tempat Tanggal Lahir`),
                new TextRun(`\t:`),
            ],
         
        }),
        new Paragraph({
            style:"normaltext",
            tabStops: [
                {
                    type: TabStopType.CENTER,
                    position: 2450,
                },
            ],
            children:[
                new TextRun(`Alamat`),
                new TextRun(`\t:`),
                new TextRun(``).break(),
            ],
        }),
        new Paragraph({
            style:"normaltext",
            text:`Bertindak untuk dan atas nama diri sendiri sebagai programmer untuk selanjutnya disebut PIHAK PERTAMA`
            }),
        new Paragraph({
            style:"normaltext",
            alignment:AlignmentType.CENTER,
            text:`dan`
        }),
        new Paragraph({
            style:"normaltext",
            tabStops: [
                {
                    type: TabStopType.CENTER,
                    position: 2450,
                },
            ],
            children:[
                new TextRun(`Nama`),
                new TextRun(`\t:`),
            ],
         
        }),
        new Paragraph({
            style:"normaltext",
            tabStops: [
                {
                    type: TabStopType.CENTER,
                    position: 2450,
                },
            ],
            children:[
                new TextRun(`NIK`),
                new TextRun(`\t:`),
            ],
         
        }),
        new Paragraph({
            style:"normaltext",
            tabStops: [
                {
                    type: TabStopType.CENTER,
                    position: 2450,
                },
            ],
            children:[
                new TextRun(`Nama Institusi`),
                new TextRun(`\t:`),
            ],
         
        }),
        new Paragraph({
            style:"normaltext",
            tabStops: [
                {
                    type: TabStopType.CENTER,
                    position: 2450,
                },
            ],
            children:[
                new TextRun(`NPWP`),
                new TextRun(`\t:`),
            ],
         
        }),
        new Paragraph({
            style:"normaltext",
            tabStops: [
                {
                    type: TabStopType.CENTER,
                    position: 2450,
                },
            ],
            children:[
                new TextRun(`Jabatan`),
                new TextRun(`\t:`),
            ],
         
        }),
        new Paragraph({
            style:"normaltext",
            tabStops: [
                {
                    type: TabStopType.CENTER,
                    position: 2450,
                },
            ],
            children:[
                new TextRun(`Alamat`),
                new TextRun(`\t:`),
                new TextRun(``).break(),
            ],
        }),
        new Paragraph({
            style:"normaltext",
            text:`Sebagai (jabatan pemberi kerja) bertindak untuk dan atas nama ${pemberiKerja} untuk selanjutnya disebut sebagai PIHAK KEDUA.`,
            children:[
                new TextRun(``).break(),
            ],
        }),
        new Paragraph({
            style:"normaltext",
            text:`Dengan ini, sepakat untuk mengadakan perjanjian kerja (jenis pekerjaan) dengan syarat- syarat dan ketentuan-ketentuan sebagai berikut.`,
            children:[
                new TextRun(``).break(),
                new TextRun(``).break(),
            ],
        }),
    ]
    }

    createContactInfo(phoneNumber, profileUrl, email) {
        return new Paragraph({
            alignment: AlignmentType.CENTER,
          
             
            children: [
                new TextRun(`Mobile: ${phoneNumber} | LinkedIn: ${profileUrl} | Email: ${email}`),
                new TextRun("Address: 58 Elm Avenue, Kent ME4 6ER, UK").break(),
            ],
        });
    }

    createHeading(text) {
        return new Paragraph({
            text: text,
            heading: HeadingLevel.HEADING_1,
            thematicBreak: true,
        });
    }

    createSubHeading(text) {
        return new Paragraph({
            text: text,
            heading: HeadingLevel.HEADING_2,
        });
    }

    createInstitutionHeader(institutionName, dateText) {
        return new Paragraph({
            tabStops: [
                {
                    type: TabStopType.RIGHT,
                    position: TabStopPosition.MAX,
                },
            ],
            children: [
                new TextRun({
                    text: institutionName,
                    bold: true,
                }),
                new TextRun({
                    text: `\t${dateText}`,
                    bold: true,
                }),
            ],
        });
    }

    createRoleText(roleText) {
        return new Paragraph({
            children: [
                new TextRun({
                    text: roleText,
                    italics: true,
                }),
            ],
        });
    }

    createBullet(text) {
        return new Paragraph({
            text: text,
            bullet: {
                level: 0,
            },
        });
    }

    // tslint:disable-next-line:no-any
    createSkillList(skills) {
        return new Paragraph({
            children: [new TextRun(skills.map((skill) => skill.name).join(", ") + ".")],
        });
    }

    // tslint:disable-next-line:no-any
    createAchivementsList(achivements) {
        return achivements.map(
            (achievement) =>
                new Paragraph({
                    text: achievement.name,
                    bullet: {
                        level: 0,
                    },
                }),
        );
    }

    createInterests(interests) {
        return new Paragraph({
            children: [new TextRun(interests)],
        });
    }

    splitParagraphIntoBullets(text) {
        return text.split("\n\n");
    }

    // tslint:disable-next-line:no-any
    createPositionDateText(startDate, endDate, isCurrent) {
        const startDateText = this.getMonthFromInt(startDate.month) + ". " + startDate.year;
        const endDateText = isCurrent ? "Present" : `${this.getMonthFromInt(endDate.month)}. ${endDate.year}`;

        return `${startDateText} - ${endDateText}`;
    }

    getMonthFromInt(value) {
        switch (value) {
            case 1:
                return "Jan";
            case 2:
                return "Feb";
            case 3:
                return "Mar";
            case 4:
                return "Apr";
            case 5:
                return "May";
            case 6:
                return "Jun";
            case 7:
                return "Jul";
            case 8:
                return "Aug";
            case 9:
                return "Sept";
            case 10:
                return "Oct";
            case 11:
                return "Nov";
            case 12:
                return "Dec";
            default:
                return "N/A";
        }
    }


    createPasal1 () {
            return [
                new Paragraph ({
                    style:"normaltext",
                    alignment:AlignmentType.CENTER,
                    children: [
                        new TextRun ({
                            text : `Pasal 1`,
                            bold: true
                        })
                    ]
                }),
                new Paragraph ({
                    style:"normaltext",
                    alignment:AlignmentType.CENTER,
                    children: [
                        new TextRun ({
                            text : `Pernyataan`,
                            bold: true
                        }),
                        new TextRun(``).break(),
                    ]
                }),
                new Paragraph ({
                    numbering: {
                        reference: "my-crazy-numbering",
                        level: 0, 
                    },
                    text : `Pihak Pertama telah menyatakan persetujuannya untuk menjadi pekerja harian/lepas.`,
                    children: [
                        new TextRun(``).break(),
                    ]
                }),
                new Paragraph ({
                    numbering: {
                        reference: "my-crazy-numbering",
                        level: 0,
                    },
                    text : `Pihak Kedua menyatakan kesediaannya selaku pemberi kerja yang tunduk pada peraturan perundang-undangan yang berlaku di Indonesia`,
                    children: [
                        new TextRun(``).break(),
                    ]
                })
            ]
    }


    createPasal2 () {
        return [
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Pasal 2`,
                        bold: true
                    })
                ]
            }),
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Ruang Lingkup Pekerjaan`,
                        bold: true
                    }),
                    new TextRun(``).break(),
                ] 
            }),
            new Paragraph ({
                text : `Pekerjaan yang harus dilakukan Pihak Pertama selaku pekerja harian/lepas pada Pihak Kedua adalah (detail deskripsi kerja: hasil kerja, penggunaan hasil kerja dan ketentuan maksimal revisi).`,
                style:"normaltext",
                children: [
                    new TextRun(``).break(),
                ]
            }),
        ]
}

    createPasal3 (startDate, endDate) {
        return [
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Pasal 3`,
                        bold: true
                    })
                ]
            }),
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Jangka Waktu Berlakunya Perjanjian Kerja`,
                        bold: true
                    }),
                    new TextRun(``).break(),
                ] 
            }),
            new Paragraph ({
                text : `Perjanjian Kerja ini berlaku untuk jangka waktu (durasi) terhitung sejak (waktu/tanggal) ${startDate} hingga ${endDate} dan dapat diperpanjang atas kesepakatan kedua belah pihak.`,
                style:"normaltext",  
                children: [
                    new TextRun(``).break(),
                ]
            })
        ]
    }

    createPasal4 (upahTotal, persenTengah, tanggalTengah, persenAkhir, tanggalAkhir, upahPokok, asuransiKk, asuransiKes, alatKerja) {
        return [
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Pasal 4`,
                        bold: true
                    })
                ]
            }),
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Upah`,
                        bold: true
                    }),
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1, 
                },
                text : `Pihak Pertama berhak menerima upah total sebesar Rp.${upahTotal} dengan mekanisme pembayaran tiga tahap atau 20% di awal pada saat kontrak ditandatangani, ${persenTengah}% di pertengahan pada tanggal ${tanggalTengah} dan ${persenAkhir}% di akhir sebagai pelunasan pada tanggal ${tanggalAkhir}`,  
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
                text : `Apabila terjadi keterlambatan pembayaran upah, Pihak Kedua sepakat untuk membayar denda keterlambatan 2,5% per hari dari total upah yang diperjanjikan dalam perjanjian ini.`,
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
                text : `Komponen upah terdiri dari :`,
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 2,
                },
                text : `upah pokok sebesar Rp.${upahPokok}`,
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 2,
                },
                text : `asuransi ketenagakerjaan sebesar Rp.${asuransiKk}`,
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 2,
                },
                text : `asuransi kesehatan sebesar Rp.${asuransiKes}`,
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 2,
                },
                text : `alat kerja sebesar Rp.${alatKerja}`,
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
                text : `Pihak Kedua akan membayarkan semua bentuk pajak yang keluar dari perjanjian ini berdasarkan Peraturan Perpajakan Negara Indonesia.`,
                children: [
                    new TextRun(``).break(),
                ]
            })
        ]
    }

    createPasal5 (upahLembur, jamSos) {
        return [
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Pasal 5`,
                        bold: true
                    })
                ]
            }),
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Hak dan Kewajiban`,
                        bold: true
                    }),
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 3, 
                },
                text : `Pihak Pertama memiliki jam koordinasi kerja 8 jam setiap hari dengan ketentuan dari jam 09.00 hingga jam 18.00 WIB (waktu menyesuaikan kesepakatan).`,  
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 3,
                },
                text : `Pihak Pertama berhak memiliki waktu istirahat setelah hari kelima bekerja.`,
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 3,
                },
                text : `Pihak Pertama berhak atas upah lembur jika ada pekerjaan yang harus segera diselesaikan di luar jam kerja yang telah ditentukan,dengan upah lembur sebesar Rp.${upahLembur} /setiap jam lembur.`,
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 3,
                },
                text : `Pihak Pertama berhak atas Jaminan Sosial Tenaga Kerja dengan mekanisme (penggantian uang atau masuk komponen upah).`,
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 3,
                },
                text : `Pihak Pertama beserta Keluarga (maksimal dengan 3 anak) berhak atas Jaminan Sosial Kesehatan dengan mekanisme ${jamSos}`,
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 3,
                },
                text : `Pihak Pertama berkewajiban memenuhi/melaksanakan tugas-tugasnya sebagaimana diuraikan di dalam uraian pekerjaan Pasal 2 tentang ruang lingkup pekerjaan.`,
                children: [
                    new TextRun(``).break(),
                ]
            })
        ]
    }

    createPasal6 (sewaAlat, perlindunganAlat) {
        return [
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Pasal 6`,
                        bold: true
                    })
                ]
            }),
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Alat Kerja`,
                        bold: true
                    }),
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 4,    
                },
                text : `Pihak Kedua menyediakan alat kerja yang dibutuhkan oleh Pihak Pertama untuk melakukan pekerjaan yang diperjanjikan.`,
                children: [
                    new TextRun(``).break(),
                ] 
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 4,
                },
                text : `Jika alat kerja yang digunakan adalah alat kerja milik Pihak Pertama atau pihak lain yang disediakan oleh Pihak Pertama, maka hal tersebut dikenakan uang sewa alat kerja sebesar Rp.${sewaAlat}/hari (pertimbangkan untuk masuk dalam komponen upah).`,
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 4,
                },
                text : `Pembayaran sewa alat kerja dan perlindungan alat kerja sebesar Rp.${perlindunganAlat} sesuai kesepakatan kedua belah pihak.`,
                children: [
                    new TextRun(``).break(),
                ]
            })
        ]
    }


    createPasal7 () {
        return [
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Pasal 7`,
                        bold: true
                    })
                ]
            }),
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Jaminan`,
                        bold: true
                    }),
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                text : `Para pihak menjamin bahwa :`,
                style:"normaltext",
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 5,
                },
                text : `Kewajiban dan hak para pihak akan dilakukan dipenuhi secara profesional.`, 
                children: [
                    new TextRun(``).break(),
                ] 
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 5,
                },
                text : `Tidak ada penggunaan, produksi, distribusi atau eksploitasi yang akan melanggar, menyalahgunakan atau melanggar kekayaan intelektual atau hak lain dari orang atau badan.`,
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 5,
                },
                text : `Para pihak harus mematuhi semua hukum yang berlaku di Indonesia dalam menjalankan pekerjaan yang diperjanjikan.`,
                children: [
                    new TextRun(``).break(),
                ]
            })
        ]
    }

    createPasal8 () {
        return [
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Pasal 8`,
                        bold: true
                    })
                ]
            }),
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Hak Kekayaan Intelektual`,
                        bold: true
                    }),
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 6,
                },
                text : `Para pihak menjamin untuk menghormati hak kekayaan intelektual yang dihasilkan dari perjanjian kerja ini.`,  
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 6,
                },
                text : `Hasil karya yang telah dikerjakan menjadi milik kedua belah pihak setelah dilakukan pelunasan pembayaran oleh Pihak Kedua.`,
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 6,
                },
                text : `Pihak Kedua tidak diperkenankan menggunakan hasil karya yang telah diberikan oleh Pihak Pertama sebelum melakukan pelunasan biaya, dan`,
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 6,
                },
                text : `Pihak Kedua tidak diperkenankan menggunakan ulang hasil karya atau menggandakan hasil karya yang dibuat oleh Pihak Pertama lebih dari 1 kali tanpa adanya persetujuan dari Pihak Pertama.`,
                children: [
                    new TextRun(``).break(),
                ]
            })
        ]
    }

    createPasal9 () {
        return [
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Pasal 9`,
                        bold: true
                    })
                ]
            }),
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Perlindungan terhadap Pekerja Perempuan`,
                        bold: true
                    }),
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 7,
                },
                text : `Dalam hal Pihak Pertama diharuskan berangkat atau pulang bekerja di luar jam kerja dan pulang di atas pukul 22.00 WIB, maka Pihak Kedua wajib menyediakan transportasi yang aman untuk Pihak Pertama atau sekurang-kurangnya menyediakan pengganti biaya taksi.`,  
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 7,
                },
                text : `Hak pekerja perempuan dalam kondisi haid dan melahirkan disesuaikan dengan kesepakatan kedua pihak dengan mengacu kepada peraturan ketenagakerjaan yang berlaku di Indonesia.`,
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 7,
                },
                text : `Pihak Kedua berkewajiban melindungi pekerja perempuan dari ancaman kekerasan dan pelecehan seksual.`,
                children: [
                    new TextRun(``).break(),
                ]
            })
        ]
    }

    createKeadaanDarurat () {
        return [
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Keadaan Darurat (force majeure)`,
                        bold: true
                    }),
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 8,
                },
                text : `Perjanjian kerja ini batal dengan sendirinya jika karena keadaan atau situasi yang memaksa, seperti: bencana alam, pemberontakan, perang, huru-hara, kerusuhan, atau apa pun yang mengakibatkan perjanjian kerja ini tidak mungkin lagi untuk diwujudkan.`,
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 8,
                },
                text : `Pihak Pertama sakit atau dalam keadaan fisik dan nonfisik yang tidak memungkinkan memenuhi kewajiban sebagaimana pasal 2, maka waktu penyelesaian pekerjaan dapat dinegosiasikan kembali.`,
                children: [
                    new TextRun(``).break(),
                ]
            })
        ]
    }

    createPasal10 () {
        return [
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Pasal 10`,
                        bold: true
                    })
                ]
            }),
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Penyelesaian Perselisihan`,
                        bold: true
                    }),
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 0,
                },
                text : `Apabila terjadi perselisihan antara kedua belah pihak akan diselesaikan secara musyawarah untuk mencapai mufakat.`, 
                children: [
                    new TextRun(``).break(),
                ] 
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 0,
                },
                text : `Apabila dengan cara ayat 1 pasal ini tidak tercapai kata sepakat, maka kedua belah pihak sepakat untuk menyelesaikan permasalahan tersebut dilakukan melalui prosedur hukum yang berlaku atau Pengadilan Hubungan Industrial.`,
                children: [
                    new TextRun(``).break(),
                ]
            })
        ]
    }

    createPasal11 () {
        return [
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Pasal 11`,
                        bold: true
                    })
                ]
            }),
            new Paragraph ({
                style:"normaltext",
                alignment:AlignmentType.CENTER,
                children: [
                    new TextRun ({
                        text : `Lain-lain`,
                        bold: true
                    }),
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 9, 
                },
                text : `Hal-hal yang belum tercantum di dalam perjanjian ini akan diatur kemudian.`, 
                children: [
                    new TextRun(``).break(),
                ] 
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 9,
                },
                text : `Segala perubahan terhadap sebagian atau seluruh pasal dalam perjanjian kerja ini hanya dapat dilakukan dengan persetujuan para pihak`,
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 10,
                },
                text : `Perjanjian kerja ini dibuat rangkap 2 (dua) yang masing-masing mempunyai kekuatan hukum yang sama.`,
                children: [
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 10,
                },
                text : `Perjanjian kerja ini wajib dibuat dalam bahasa Indonesia dan jika dibutuhkan dalam bahasa Inggris.`,
                children: [
                    new TextRun(``).break(),
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph ({
                text : `Demikianlah perjanjian kerja ini dibuat oleh kedua belah pihak dalam keadaan sehat jasmani dan rohani tanpa adanya paksaan atau tekanan dari pihak mana pun.`,
                style:"normaltext",
                children: [
                    new TextRun(``).break(),
                    new TextRun(``).break(),
                    new TextRun(``).break(),
                    new TextRun(``).break(),
                ]
            }),
            new Paragraph({
                style:"normaltext",
                tabStops: [
                    {
                        type: TabStopType.CENTER,
                        position: 7000,
                    },
                ],
                children:[
                    new TextRun(`PIHAK PERTAMA`),
                    new TextRun(`\tPIHAK KEDUA`),
                    new TextRun(``).break(),
                    new TextRun(``).break(),
                    new TextRun(``).break(),
                    new TextRun(``).break(),
                    new TextRun(``).break(),
                    new TextRun(``).break(),
                ],
            }),
            new Paragraph({
                style:"normaltext",
                tabStops: [
                    {
                        type: TabStopType.CENTER,
                        position: 7000,
                    },
                ],
                children:[
                    new TextRun(`      (materai)`),
                    new TextRun(`\t(materai)`),
                    new TextRun(``).break(),
                ],
            }),
            new Paragraph({
                style:"normaltext",
                tabStops: [
                    {
                        type: TabStopType.CENTER,
                        position: 7000,
                    },
                ],
                children:[
                    new TextRun(`1. .......................`),
                    new TextRun(`\t2. .......................`),
                    new TextRun(``).break(),
                ],
            }),
        ]
    }

   


}

app.get("/", async (req, res) => {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([experiences, education, skills, achievements]);

    const b64string = await Packer.toBase64String(doc);
    
    res.setHeader('Content-Disposition', 'attachment; filename=My Document.docx');
    res.send(Buffer.from(b64string, 'base64'));
});

app.listen(3001, () => console.log(`Example app listening at http://localhost:3001`))