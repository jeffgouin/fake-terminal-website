"use strict";

/**
 * Configs
 */
var configs = (function () {
    var instance;
    var Singleton = function (options) {
        var options = options || Singleton.defaultOptions;
        for (var key in Singleton.defaultOptions) {
            this[key] = options[key] || Singleton.defaultOptions[key];
        }
    };
    Singleton.defaultOptions = {
        general_help: "Voici la liste des commandes utilisable.\nVous pouvez utilisez la touche TAB pour la saisie-automatique d'une commande s'il n'y a qu'une possibilité.",
        dir_help: "Afficher la liste des fichiers et sous-répertoires d'un répertoire.",
        cat_help: "Afficher le contenu d’un fichier texte.",
        whoami_help: "Afficher le nom du domaine suivi du caractère antislash et du nom de l'utilisateur.",
        date_help: "Afficher l'heure et la date système.",
        help_help: "Afficher ce menu.",
        clear_help: "Effacer le contenu de cette fenêtre terminal.",
        reboot_help: "Redémmarer le système.",
        cd_help: "Changer le répertoire de travail actuel.",
        mv_help: "Déplacer des fichiers ou répertoires.",
        rm_help: "Effacer des fichiers ou répertoires.",
        execute_help: "Exécuter un programme.",
        welcome: "Curriculum Vitae Jean-Francois Gouin v.1.3.1 (MS-DOS Édition) \n\nPour obtenir plus d'informations sur une commande spécifique, veuillez taper la commande 'HELP'.\nPour une navigation simplifiée,vous pouvez toujours utiliser le menu de gauche.",
        internet_explorer_warning: "NOTE: Je vois que tu utilises internet explorer, télécharge Google Chrome.",
        welcome_file_name: "welcome_message.txt",
        invalid_command_message: "<value>: commande invalide.",
        reboot_message: "Préparation du redémmarage...\n\n3...\n\n2...\n\n1...\n\nRebooting...\n\n",
        permission_denied_message: "Impossible d'utiliser '<value>', permission refusée.",
        sudo_message: "Impossible d'utiliser en tant que web client.",
        usage: "Usage",
        file: "file",
        file_not_found: "Fichier '<value>' introuvable.",
        not_exec: "Impossible d'exécuter '<value>'.",
        username: "Username",
        hostname: "Host",
        platform: "Platform",
        accesible_cores: "Cores accessibles",
        language: "Language",
        value_token: "<value>",
        host: "User\\JeffGouin>",
        user: "C:\\",
        is_root: false,
        type_delay: 2
    };
    return {
        getInstance: function (options) {
            instance === void 0 && (instance = new Singleton(options));
            return instance;
        }
    };
})();

var files = (function () {
    var instance;
    var Singleton = function (options) {
        var options = options || Singleton.defaultOptions;
        for (var key in Singleton.defaultOptions) {
            this[key] = options[key] || Singleton.defaultOptions[key];
        }
    };
    Singleton.defaultOptions = {
        "a_propos.txt": "Jean-François Gouin (info@jeffgouin.ca)" +
                        "\n\nCe site web a été créé dans l'obectif de présenter un curriculum vitae intéractif, un peu 'geek' et amusant. :)" +
                        "\n\nJe possède plus de 15 ans d’expérience en programmation informatique, analyse de dossier, administration de base  de données et architecture logicielle." +
                        "\nEn plus de mon expertise en programmation, je possède d’excellentes aptitudes organisationnelles, ainsi qu’un très bon sens du leadership et de gestion des priorités." +
                        "\nJe possède une grande facilité d’apprentissage et d’intégration, je suis apte à produire des livrables dans les délais les plus intéressants.",
        "resume_profesionnel.txt": "NO.\t|\tCLIENT\t|\tPROJET\t|\tFonction\t|\tAnnée\t|\tEfforts (mois)\n\n"+
                                   "13\t|\tC.R.A.A.Q.\t|\tDéveloppement logiciel\t|\tProgrammeur Analyste & Scrum Master\t|\t2018-...\t|\t18\n" +
                                   "12\t|\tCeratec\t|\tDéveloppement logiciel\t|\tProgrammeur Analyste\t|\t2015-2018\t|\t36\n" +
                                   "11\t|\tDesjardins Groupe d’assurances générales\t|\tInfrastructure applicative\t|\tProgrammeur Analyste\t|\t2015-2015\t|\t5\n" +
                                   "10\t|\tRégie de l’assurance maladie du Québec\t|\tSYRA (Rémunération à l’acte)\t|\tProgrammeur Analyste\t|\t2013-2014\t|\t11\n" +
                                   "09\t|\tMinistère du Revenu du Québec\t|\tTT/TC (Échanges électroniques)\t|\tProgrammeur Analyste\t|\t2012-2012\t|\t4\n" +
                                   "08\t|\tMinistère du Revenu du Québec\t|\tT1/G1B (Inscriptions électroniques)\t|\tProgrammeur Analyste\t|\t2011-2012\t|\t12\n" +
                                   "07\t|\tRégie de l’assurance maladie du Québec\t|\tFichier d’inscription des professionnels\t|\tProgrammeur Analyste\t|\t2010-2011\t|\t4\n" +
                                   "06\t|\tRégie de l’assurance maladie du Québec\t|\tRèglement des forfaits\t|\tProgrammeur Analyste\t|\t2010-2010\t|\t7\n" +
                                   "05\t|\tRégie de l’assurance maladie du Québec\t|\tProjet inscription générale\t|\tProgrammeur Analyste\t|\t2009-2010\t|\t9\n" +
                                   "04\t|\tCOGEP\t|\tGuide TI - Gestion des actifs stratégiques\t|\tProgrammeur Analyste\t|\t2007-2009\t|\t32\n" +
                                   "03\t|\tMatiss\t|\tMatissoft\t|\tProgrammeur Analyste\t|\t2005-2007\t|\t36\n" +
                                   "02\t|\tDator\t|\tSofticket (SiS)\t|\tProgrammeur Analyste\t|\t2003-2005\t|\t24\n" +
                                   "01\t|\tSolution Form@Dev\t|\tDéveloppement logiciel\t|\tProgrammeur Analyste\t|\t2002-2003\t|\t7\n" +
                                   "\n *** Voir curriculum vitae complet ***",
        "curriculum_vitae_complet.docx" : "https://drive.google.com/file/d/1JZCx7UFAHR6_zFXdW_9eM2b1K3cGIu9-/view?usp=sharing",
        "contact.txt": "Courriel : info@jeffgouin.ca\nTéléphone : (418)559-4642",
        "linked_in.html": "https://www.linkedin.com/in/jean-fran%C3%A7ois-gouin-b816b431/",
        "hack.exe": "��������������������G������v�������������������☻☻\n" +
                    "������|����M����r���f��$|����M����6r���f☻☻��$|����M����r���f��$|����M����r���f��$\n" +
                    "��������������☻☻�������9�����v�������������������\n" +
                    "������|����M����r���f��$|����M����r��2�f��$|����M����r���f��$|☻☻����M����r���f��$"

    };
    return {
        getInstance: function (options) {
            instance === void 0 && (instance = new Singleton(options));
            return instance;
        }
    };
})();

var main = (function () {

    /**
     * Aux functions
     */
    var isUsingIE = window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);

    var ignoreEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };

    var scrollToBottom = function () {
        window.scrollTo(0, document.body.scrollHeight);
    };

    var isURL = function (str) {
        return (str.startsWith("http") || str.startsWith("www")) && str.indexOf(" ") === -1 && str.indexOf("\n") === -1;
    };

    /**
     * Model
     */
    var InvalidArgumentException = function (message) {
        this.message = message;
        // Use V8's native method if available, otherwise fallback
        if ("captureStackTrace" in Error) {
            Error.captureStackTrace(this, InvalidArgumentException);
        } else {
            this.stack = (new Error()).stack;
        }
    };
    // Extends Error
    InvalidArgumentException.prototype = Object.create(Error.prototype);
    InvalidArgumentException.prototype.name = "InvalidArgumentException";
    InvalidArgumentException.prototype.constructor = InvalidArgumentException;

    var cmds = {
        DIR: { value: "dir", help: configs.getInstance().dir_help },
        CAT: { value: "cat", help: configs.getInstance().cat_help },
        WHOAMI: { value: "whoami", help: configs.getInstance().whoami_help },
        DATE: { value: "date", help: configs.getInstance().date_help },
        HELP: { value: "help", help: configs.getInstance().help_help },
        CLEAR: { value: "clear", help: configs.getInstance().clear_help },
        REBOOT: { value: "reboot", help: configs.getInstance().reboot_help },
        CD: { value: "cd", help: configs.getInstance().cd_help },
        MV: { value: "mv", help: configs.getInstance().mv_help },
        RM: { value: "rm", help: configs.getInstance().rm_help },
        EXECUTE: { value: "execute", help: configs.getInstance().execute_help }
    };

    var Terminal = function (prompt, cmdLine, output, sidenav, profilePic, user, host, root, outputTimer) {
        if (!(prompt instanceof Node) || prompt.nodeName.toUpperCase() !== "DIV") {
            throw new InvalidArgumentException("Invalid value " + prompt + " for argument 'prompt'.");
        }
        if (!(cmdLine instanceof Node) || cmdLine.nodeName.toUpperCase() !== "INPUT") {
            throw new InvalidArgumentException("Invalid value " + cmdLine + " for argument 'cmdLine'.");
        }
        if (!(output instanceof Node) || output.nodeName.toUpperCase() !== "DIV") {
            throw new InvalidArgumentException("Invalid value " + output + " for argument 'output'.");
        }
        if (!(sidenav instanceof Node) || sidenav.nodeName.toUpperCase() !== "DIV") {
            throw new InvalidArgumentException("Invalid value " + sidenav + " for argument 'sidenav'.");
        }
        if (!(profilePic instanceof Node) || profilePic.nodeName.toUpperCase() !== "IMG") {
            throw new InvalidArgumentException("Invalid value " + profilePic + " for argument 'profilePic'.");
        }
        (typeof user === "string" && typeof host === "string") && (this.completePrompt = user + host);
        this.profilePic = profilePic;
        this.prompt = prompt;
        this.cmdLine = cmdLine;
        this.output = output;
        this.sidenav = sidenav;
        this.sidenavOpen = false;
        this.sidenavElements = [];
        this.typeSimulator = new TypeSimulator(outputTimer, output);
    };

    Terminal.prototype.type = function (text, callback) {
        this.typeSimulator.type(text, callback);
    };

    Terminal.prototype.exec = function () {
        var command = this.cmdLine.value;
        this.cmdLine.value = "";
        this.prompt.textContent = "";
        this.output.innerHTML += "<span class=\"prompt-color\">" + this.completePrompt + "</span> " + command + "<br/>";
    };

    Terminal.prototype.init = function () {
        this.sidenav.addEventListener("click", ignoreEvent);
        this.cmdLine.disabled = true;
        this.sidenavElements.forEach(function (elem) {
            elem.disabled = true;
        });
        this.prepareSideNav();
        this.lock(); // Need to lock here since the sidenav elements were just added
        document.body.addEventListener("click", function (event) {
            if (this.sidenavOpen) {
                this.handleSidenav(event);
            }
            this.focus();
        }.bind(this));
        this.cmdLine.addEventListener("keydown", function (event) {
            if (event.which === 13 || event.keyCode === 13) {
                this.handleCmd();
                ignoreEvent(event);
            } else if (event.which === 9 || event.keyCode === 9) {
                this.handleFill();
                ignoreEvent(event);
            }
        }.bind(this));
        this.reset();
    };

    Terminal.makeElementDisappear = function (element) {
        element.style.opacity = 0;
        element.style.transform = "translateX(-300px)";
    };

    Terminal.makeElementAppear = function (element) {
        element.style.opacity = 1;
        element.style.transform = "translateX(0)";
    };

    Terminal.prototype.prepareSideNav = function () {
        var capFirst = (function () {
            return function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        })();
        for (var file in files.getInstance()) {
            if(file != "hack.exe")
            {
              var element = document.createElement("button");
              Terminal.makeElementDisappear(element);
              element.onclick = function (file, event) {
                  this.handleSidenav(event);
                  this.cmdLine.value = "cat " + file + " ";
                  this.handleCmd();
              }.bind(this, file);
              element.appendChild(document.createTextNode(capFirst(file.replace(/\.[^/.]+$/, "").replace(/_/g, " "))));
              this.sidenav.appendChild(element);
              this.sidenavElements.push(element);
            }
        }
        // Shouldn't use document.getElementById but Terminal is already using loads of params
        document.getElementById("sidenavBtn").addEventListener("click", this.handleSidenav.bind(this));
    };

    Terminal.prototype.handleSidenav = function (event) {
        if (this.sidenavOpen) {
            this.profilePic.style.opacity = 0;
            this.sidenavElements.forEach(Terminal.makeElementDisappear);
            this.sidenav.style.width = "50px";
            document.getElementById("sidenavBtn").innerHTML = "&#9776;";
            this.sidenavOpen = false;
        } else {
            this.sidenav.style.width = "300px";
            this.sidenavElements.forEach(Terminal.makeElementAppear);
            document.getElementById("sidenavBtn").innerHTML = "&times;";
            this.profilePic.style.opacity = 1;
            this.sidenavOpen = true;
        }
        document.getElementById("sidenavBtn").blur();
        ignoreEvent(event);
    };

    Terminal.prototype.lock = function () {
        this.exec();
        this.cmdLine.blur();
        this.cmdLine.disabled = true;
        this.sidenavElements.forEach(function (elem) {
            elem.disabled = true;
        });
    };

    Terminal.prototype.unlock = function () {
        this.cmdLine.disabled = false;
        this.prompt.textContent = this.completePrompt;
        this.sidenavElements.forEach(function (elem) {
            elem.disabled = false;
        });
        scrollToBottom();
        this.focus();
    };

    Terminal.prototype.handleFill = function () {
        var cmdComponents = this.cmdLine.value.trim().split(" ");
        if ((cmdComponents.length <= 1) || (cmdComponents.length === 2 && cmdComponents[0] === cmds.CAT.value)) {
            this.lock();
            var possibilities = [];
            if (cmdComponents[0].toLowerCase() === cmds.CAT.value) {
                if (cmdComponents.length === 1) {
                    cmdComponents[1] = "";
                }
                if (configs.getInstance().welcome_file_name.startsWith(cmdComponents[1].toLowerCase())) {
                    possibilities.push(cmds.CAT.value + " " + configs.getInstance().welcome_file_name);
                }
                for (var file in files.getInstance()) {
                    if (file.startsWith(cmdComponents[1].toLowerCase())) {
                        possibilities.push(cmds.CAT.value + " " + file);
                    }
                }
            }
            else if((cmdComponents.length <= 1) || (cmdComponents.length === 2 && cmdComponents[0] === cmds.EXECUTE.value)){
              this.lock();
              var possibilities = [];
              if (cmdComponents[0].toLowerCase() === cmds.EXECUTE.value) {
                  if (cmdComponents.length === 1) {
                      cmdComponents[1] = "";
                  }
                  if (configs.getInstance().welcome_file_name.startsWith(cmdComponents[1].toLowerCase())) {
                      possibilities.push(cmds.EXECUTE.value + " " + configs.getInstance().welcome_file_name);
                  }
                  for (var file in files.getInstance()) {
                      if (file.startsWith(cmdComponents[1].toLowerCase())) {
                          possibilities.push(cmds.EXECUTE.value + " " + file);
                      }
                  }
              }
            }
            else {
                for (var command in cmds) {
                    if (cmds[command].value.startsWith(cmdComponents[0].toLowerCase())) {
                        possibilities.push(cmds[command].value);
                    }
                }
            }
            if (possibilities.length === 1) {
                this.cmdLine.value = possibilities[0] + " ";
                this.unlock();
            } else if (possibilities.length > 1) {
                this.type(possibilities.join("\n"), function () {
                    this.cmdLine.value = cmdComponents.join(" ");
                    this.unlock();
                }.bind(this));
            } else {
                this.cmdLine.value = cmdComponents.join(" ");
                this.unlock();
            }
        }
    };

    Terminal.prototype.handleCmd = function () {
        var cmdComponents = this.cmdLine.value.trim().split(" ");

        for(var i = 0; i < cmdComponents.length; i++) {
            cmdComponents[i] = cmdComponents[i].toLowerCase();
        }

        this.lock();
        switch (cmdComponents[0]) {
            case cmds.CAT.value:
                this.cat(cmdComponents);
                break;
            case cmds.EXECUTE.value:
                this.execute(cmdComponents);
                break;
            case cmds.DIR.value:
                this.dir();
                break;
            case cmds.WHOAMI.value:
                this.whoami();
                break;
            case cmds.DATE.value:
                this.date();
                break;
            case cmds.HELP.value:
                this.help();
                break;
            case cmds.CLEAR.value:
                this.clear();
                break;
            case cmds.REBOOT.value:
                this.reboot();
                break;
            case cmds.CD.value:
            case cmds.MV.value:
            case cmds.RM.value:
                this.permissionDenied(cmdComponents);
                break;
            default:
                this.invalidCommand(cmdComponents);
                break;
        };
    };

    Terminal.prototype.execute = function (cmdComponents) {
        var result;
        if (cmdComponents.length <= 1) {
            result = configs.getInstance().usage + ": " + cmds.EXECUTE.value + " <" + configs.getInstance().file + ">";
        } else if (!cmdComponents[1] || (cmdComponents[1] != "hack.exe")) {
            result = configs.getInstance().not_exec.replace(configs.getInstance().value_token, cmdComponents[1]);
        } else {
            window.location.replace("hack.html");
        }
        this.type(result, this.unlock.bind(this));
    };

    Terminal.prototype.cat = function (cmdComponents) {
        var result;
        if (cmdComponents.length <= 1) {
            result = configs.getInstance().usage + ": " + cmds.CAT.value + " <" + configs.getInstance().file + ">";
        } else if (!cmdComponents[1] || (!cmdComponents[1] === configs.getInstance().welcome_file_name || !files.getInstance().hasOwnProperty(cmdComponents[1]))) {
            result = configs.getInstance().file_not_found.replace(configs.getInstance().value_token, cmdComponents[1]);
        } else {
            result = cmdComponents[1] === configs.getInstance().welcome_file_name ? configs.getInstance().welcome : files.getInstance()[cmdComponents[1]];
        }
        this.type(result, this.unlock.bind(this));
    };

    Terminal.prototype.dir = function () {
        var result = "Le volume dans le lecteur C n’a pas de nom.\nLe numéro de série du volume est G692-8EBD\n\nRépertoire de C:\\Users\\JeffGouin\n\n";
        for (var file in files.getInstance()) {
            result += file + "\n";
        }
        this.type(result.trim(), this.unlock.bind(this));
    };

    Terminal.prototype.sudo = function () {
        this.type(configs.getInstance().sudo_message, this.unlock.bind(this));
    }

    Terminal.prototype.whoami = function (cmdComponents) {
        var result = "Jean-François Gouin\n38 ans\n\nProgrammeur/Analyste\ninfo@jeffgouin.ca";
        this.type(result, this.unlock.bind(this));
    };

    Terminal.prototype.date = function (cmdComponents) {
        this.type(new Date().toString(), this.unlock.bind(this));
    };

    Terminal.prototype.help = function () {
        var result = configs.getInstance().general_help + "\n\n";
        for (var cmd in cmds) {
            result += cmds[cmd].value + " - " + cmds[cmd].help + "\n";
        }
        this.type(result.trim(), this.unlock.bind(this));
    };

    Terminal.prototype.clear = function () {
        this.output.textContent = "";
        this.prompt.textContent = "";
        this.prompt.textContent = this.completePrompt;
        this.unlock();
    };

    Terminal.prototype.reboot = function () {
        this.type(configs.getInstance().reboot_message, this.reset.bind(this));
    };

    Terminal.prototype.reset = function () {
        this.output.textContent = "";
        this.prompt.textContent = "";
        if (this.typeSimulator) {
            this.type(configs.getInstance().welcome + (isUsingIE ? "\n" + configs.getInstance().internet_explorer_warning : ""), function () {
                this.unlock();
            }.bind(this));
        }
    };

    Terminal.prototype.permissionDenied = function (cmdComponents) {
        this.type(configs.getInstance().permission_denied_message.replace(configs.getInstance().value_token, cmdComponents[0]), this.unlock.bind(this));
    };

    Terminal.prototype.invalidCommand = function (cmdComponents) {
        this.type(configs.getInstance().invalid_command_message.replace(configs.getInstance().value_token, cmdComponents[0]), this.unlock.bind(this));
    };

    Terminal.prototype.focus = function () {
        this.cmdLine.focus();
    };

    var TypeSimulator = function (timer, output) {
        var timer = parseInt(timer);
        if (timer === Number.NaN || timer < 0) {
            throw new InvalidArgumentException("Invalid value " + timer + " for argument 'timer'.");
        }
        if (!(output instanceof Node)) {
            throw new InvalidArgumentException("Invalid value " + output + " for argument 'output'.");
        }
        this.timer = timer;
        this.output = output;
    };

    TypeSimulator.prototype.type = function (text, callback) {
        if (isURL(text)) {
            window.open(text);
        }
        var i = 0;
        var output = this.output;
        var timer = this.timer;
        var skipped = false;
        var skip = function () {
            skipped = true;
        }.bind(this);
        document.addEventListener("dblclick", skip);
        (function typer() {
            if (i < text.length) {
                var char = text.charAt(i);
                var isNewLine = char === "\n";
                output.innerHTML += isNewLine ? "<br/>" : char;
                i++;
                if (!skipped) {
                    setTimeout(typer, isNewLine ? timer * 2 : timer);
                } else {
                    output.innerHTML += (text.substring(i).replace(new RegExp("\n", 'g'), "<br/>")) + "<br/>";
                    document.removeEventListener("dblclick", skip);
                    callback();
                }
            } else if (callback) {
                output.innerHTML += "<br/>";
                document.removeEventListener("dblclick", skip);
                callback();
            }
            scrollToBottom();
        })();
    };

    return {
        listener: function () {
            new Terminal(
                document.getElementById("prompt"),
                document.getElementById("cmdline"),
                document.getElementById("output"),
                document.getElementById("sidenav"),
                document.getElementById("profilePic"),
                configs.getInstance().user,
                configs.getInstance().host,
                configs.getInstance().is_root,
                configs.getInstance().type_delay
            ).init();
        }
    };
})();

window.onload = main.listener;
