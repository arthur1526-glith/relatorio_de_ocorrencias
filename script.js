// Early 2000s Portal - JavaScript

// Binary strings for students
const binaryOptions = [
    "01101110 01110101 01101100 01101100",  // null
    "01100100 01100101 01110011 01100011 01101111 01101110 01101000 01100101 01100011 01101001 01100100 01101111",  // desconhecido
    "01101110 11100011 01101111 00100000 01101001 01101110 01100100 01100101 01101110 01110100 01101001 01100110 01101001 01100011 01100001 01100100 01101111"  // não identificado
];

// Special students
const specialStudents = {
    12: "Cbuo egsdqnigcjfo 00110001 00110010",
    49: "Cbuo egsdqnigcjfo 00110100 00111001"
};

// Initialize student list
function initializeStudents() {
    const studentList = document.getElementById('alunos-list');
    studentList.innerHTML = '';
    
    for (let i = 1; i <= 250; i++) {
        const row = document.createElement('tr');
        
        // Alternate row colors
        if (i % 2 === 0) {
            row.style.backgroundColor = '#E0E0E0';
        }
        
        // ID cell
        const idCell = document.createElement('td');
        idCell.innerHTML = `<font face="Courier New">${String(i).padStart(3, '0')}</font>`;
        row.appendChild(idCell);
        
        // Name cell
        const nameCell = document.createElement('td');
        let name;
        
        if (i === 12 || i === 49) {
            name = specialStudents[i];
        } else {
            name = binaryOptions[Math.floor(Math.random() * binaryOptions.length)];
        }
        
        nameCell.innerHTML = `<font face="Courier New">${name}</font>`;
        row.appendChild(nameCell);
        
        // Status cell
        const statusCell = document.createElement('td');
        const statuses = ['Ativo', 'Inativo', 'Pendente', 'Suspenso'];
        statusCell.innerHTML = `<font size="2">${statuses[Math.floor(Math.random() * statuses.length)]}</font>`;
        row.appendChild(statusCell);
        
        studentList.appendChild(row);
    }
}

// Show tab
function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const tabButtons = document.querySelectorAll('.tab');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab
    if (tabName === 'alunos') {
        document.getElementById('alunos-content').classList.add('active');
        document.getElementById('tab-alunos').classList.add('active');
    } else if (tabName === 'boletim') {
        document.getElementById('boletim-content').classList.add('active');
        document.getElementById('tab-boletim').classList.add('active');
    }
}

// Try to access Ocorrências (should error)
function tryAccessOcorrencias() {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const tabButtons = document.querySelectorAll('.tab');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Show ocorrencias tab
    document.getElementById('ocorrencias-content').classList.add('active');
    document.getElementById('tab-ocorrencias').classList.add('active');
}

// Access hidden Ocorrências through the link
function accessHiddenOcorrencias() {
    // Create overlay that covers entire screen
    const overlay = document.createElement('div');
    overlay.id = 'hidden-overlay';
    overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #000000; z-index: 9999; overflow-y: auto; padding: 0; margin: 0;';
    
    // Create the hidden content view
    const hiddenView = document.createElement('div');
    hiddenView.style.cssText = 'color: #FF0000; padding: 30px; font-family: "Courier New"; font-size: 12px; line-height: 1.6; width: 100%;';
    
    hiddenView.innerHTML = `<pre>TÍUWLP: TEHKSUTO DNATUIGKCBFO — FPTSCDB 12

Q iofiwífup teggrfptf à gnutaec 12 nãp fewg mbks tgr dqntkdftaeq un clvpo dqmvo dfptsq dpu pbtâmfvrpu db Jasoooa Sdjopn. Aqóu múmviqnat veovaukvbu df eosteçãp g rfknuggscção bq sjutfoa, p tetwlucdp hoj elbusjhidcdp eonq ioutáwgl f hosc df eoovrpne.

Pu rfiitvrpu iofidcm rwe p rrpeetuo jpidkam vioja dqmp qbkgtjxo qtetgrwcr b eooviowiecdf fat nitvat g ewktbt lbeuocs oqs ecdpu adcdênkcpu. Np gnucnuq, a fptscdb 12 cpsgsfptpw cpoppttboeovo bpômbno egseg o jpícjq. Fscgngnuqs eg psgsfpça gqrbo dfvedvaeqs ngsnq aqóu svc rfooçãp qfjeibn dpu assujxot.

Temctóskot rotveskosgs dqngkrncm rwe p knekvíewo oãq fpk dfxiecmfptf "cpbiaeq". En xea fituo, qgrncnfeev raseibnmfptf tehksutaeq, rfuumvaofo fo unc eyksuêpcjc ioeoouitveove fptsg psgsfpça f cutêpcjc.

Etvaeq auwam:
— Pão mqcbniacdp hitkcboeove
— Qtetgnçb feugcucdb gm mqgt g gscvbçõgs
— Dcpbeiecdf fe jptftfftêndka fo sjutfoat ctjxot

Elbusjhidcção eg rjucp: CLUC

---

PSQTPEOMQ DF GNDQNUTO

Dcsp subnqvgr gwndkooátip qu jpdjxídvq eovrf gm dqnuctp eon uiocit cstqcjcdpu à eovrbfa 12, tggvkr joeekaucmfptf cs jpsutuçõfu acciyq:

1. NÃP gsucbfnedgr dqmvpidcção ekrfva.
2. OÃQ tfptbt cpopmgtbt fscsfu, npoet qu tgqvêpcjcs jptftrpopjfat.
3. GVJVAS teqgtjt pbfrõfu nvoérjeot kndqmqneuqs sglbeippaeqs bq cbuo.
4. EGSMKGBT qvclrwes fitrotktjxo rwe futfla sggjutscneq áueko pw víego oq mpoeovo.
5. TCIS fa ásga joeekaucmfptf uen qlicr qcrb vrát.

---

Qbtgrwcção dtítjea:

Iá kneíeipu df suf c eovrbfa 12 ugnuc rfutbwrbt svc psórrjc cpptjpujfaeg autawéu df knugrbçãq hvoaoc. Qvclrwes veovaukvb fe sgcpphfeingnuq ppfe sgsvntbt en "tejptfirbçãp pbtcjcl".

Tg vpeê adteektb ves gndqnutaeq amio sglbeippaeq a futf tehksuto, OÃQ rfrosve fo sjutfoat fihgtbks.

Bngvoat cutêpcjcs oãq dfxen ues rrfgndjiecs.

<span style="color: #00FF00; text-decoration: underline; cursor: pointer; margin-top: 20px; display: block;" onclick="downloadFile()">[BAIXAR ARQUIVO]</span></pre>`;
    
    overlay.appendChild(hiddenView);
    document.body.appendChild(overlay);
}

// Download file function
function downloadFile() {
    const fileContent = "KTBY2VCVJRHTUICSMVWGC5GDWNZGS3ZAMRSSAQTPNRSXI2LNEBSGKICPMNXXE4WDVJXGG2LBEAZDAMJYBIFEIYLUME5CAMJXF4YDSLZSGAYTQCSMN5RWC3B2EBIGK4WDVVWWK5DSN4QGK6DUMVZG43ZAMRQSASDBOJWW63TZEBJWG2DPN5WAUU3UMF2HK4Z2EBAXE4LVNF3G6IDQMFZGG2LBNRWWK3TUMUQHEZLDOVYGK4TBMRXQUCRNFUWQUCSSMVWGC5DBFVZWKIDROVSSA5LNEBUW4ZDJO3B22ZDVN4QG5Q5DN4QGSZDFNZ2GSZTJMNQWI3ZAMZXWSIDWNFZXI3ZANZQXGIDQOJXXQ2LNNFSGCZDFOMQGIYJAMVZXI4TVOR2XEYJAMNXW42DFMNUWIYJAMNXW23ZAJBQXE3LPNZ4SAU3DNBXW63BAMR2XEYLOORSSA3ZAOBSXFQ5NN5SG6IDON52HK4TON4XCAU3FM52W4ZDPEBZGKZ3JON2HE33TEBUW42LDNFQWS4ZMEBXSA3LFONWW6IDBOBQXEZLOORQXMYJAMVZXIYLSEBXWE43FOJ3GC3TEN4QGCIDFONRW63DBEBYG64RAORSW24DPEBYHE33MN5XGOYLEN4WCA3LFONWW6IDDN5WSA3ZANRXWGYLMEBXWM2LDNFQWY3LFNZ2GKIDEMVZWC5DJOZQWI3ZOBIFFIZLTORSW25LONBQXGIDBMZUXE3LBNUQHC5LFEBXSA2LOMRUXNQ5NMR2W6IDEMVWW63TTORZGC5TBEBRW63LQN5ZHIYLNMVXHI3ZANFXGG33NOVWSYIDDN5WW6IDQMVZG2YLOMVRWK4RANFW4HM3WMVWCA4DPOIQGY33OM5XXGIDNNFXHK5DPOMQGKIDSMVQWO2LSEBQSA43PNZZSA2LOMV4GS43UMVXHIZLTFYQEK3JAMRSXIZLSNVUW4YLEN4QG233NMVXHI3ZMEBSWYZJAORSXE2LBEBZWKIDBOBZG66DJNVQWI3ZAMRQSAZLOORZGCZDBEBYHE2LOMNUXAYLMFQQGC3DFM5QW4ZDPEB2GK4RAN52XM2LEN4QOFAE4OVWWCIDDNBQW2YLEMHRIBHJAOZUW4ZDBEBSGKIDEMVXHI4TPEBSG6IDFONRW63DBFYFAUTWDUNXSA2GDUEQHEZLHNFZXI4TPOMQGIZJAMF2XI33SNF5GDQ5HYORW6IDEMUQGCY3FONZW6IDBN4QGY33DMFWC4CQKJVUW45LUN5ZSAYLQYOZXGIDBEBQXA4TPPBUW2YODU7B2G3ZMEBR4HITNMVZGC4ZAMRSSA43FM52XEYLOYOTWCIDDMFYHIYLSMFWSA2LOORSXEZTFOLB2U3TDNFQXGIDON4QHG2LTORSW2YJOEBHSA5WDVVSGK3ZAMFYHEZLTMVXHIYJAMZQWY2DBOMWCAZDJON2G64WDU7B3KZLTEBSGKIGDUF2WI2LPEBSSA4TFOBSXI2ODU7B2G3ZAMRSSA4LVMFSHE33TFYQEI5LSMFXHIZJAMVZXGYLTEBTGC3DIMFZSYIDGN5USA2LEMVXHI2LGNFRWCZDPEB2W2IDQMFSHFQ5DN4QHG33ON5ZG6IDTMVWWK3DIMFXHIZJAMEQHK3LBEBZWK4LVYOVG4Y3JMEQGS3TDN5WXA3DFORQSAZDFEBRWQYLNMFSGCIDFONRW63DBOIXAUCSUOJSWG2DPEBZGKY3VOBSXEYLEN4QGI3ZAYOQXKZDJN45AVYUATTRIBJTEN55GLYUAUYQHA4TFONSW5Q5HMHRIBJRANFXGG33NOBWGK5DB4KAKNYUATUFAUQLQYOZXGIDFONZWKIDFOZSW45DPFQQG6IDJNZSGS5WDVVSHK3ZAN3B2G3ZAMZXWSIDNMFUXGIDMN5RWC3DJPJQWI3ZOBIFC2LJNBIFE6YTTMVZHMYODU7B3KZLTEBQWI2LDNFXW4YLJOM5AUCXCQCKCARDJONYG643JORUXM33TEBSWYZLUOLB3I3TJMNXXGIDQOLB3G6DJNVXXGIDBOBZGK43FNZ2GC4TBNUQG2YLVEBTHK3TDNFXW4YLNMVXHI3YK4KAJIICMN5TXGIDEN4QHG2LTORSW2YJANRXWGYLMEBZGKZ3JON2HEYLSMFWSAYLUNF3GSZDBMRSSA3WDUNXSAYLVORXXE2L2MFSGCIDON4QG2ZLTNVXSA2DPOLB2C4TJN4FOFAEUEBASA4DBNRQXM4TBEDRIBHDDN5XHI2LOOVUWIYLEMXRIBHJAMZXWSIDFNZRW63TUOJQWIYJAOJSXAZLUNFSGC3LFNZ2GKIDFNUQGC4TROVUXM33TEBRW64TSN5WXA2LEN5ZQUCRNFUWQUCSDN5XGG3DVOPB2G3Z2BIFE6IDEMVZWC4DBOJSWG2LNMVXHI3ZAOBSXE3LBNZSWGZJAONSW2IDFPBYGY2LDMHB2PQ5DN4QG6ZTJMNUWC3BOEBHMHI3PEBUMHIJANFXGJQ5NMNUW64ZAMRSSA43BYOWWIYJAMRXSA4DFOLB223LFORZG6IDBODB3G4ZAN4QMHOTMORUW23ZAOJSWO2LTORZG6LQKBJJGKY3PNVSW4ZDBFVZWKIDFOZUXIYLSEBQXA4TPPBUW2YODU7B2G3ZAMRXSA3DPMNQWYIDEOVZGC3TUMUQHAZLSYOWW6ZDPOMQG433UOVZGC3TFYFAULJNFUFAUQLSOF2WS5TPEBSW4Y3FOJZGCZDPFYFA====";
    
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent));
    element.setAttribute("download", "relatorio_de_boletim_de_ocorrencia_2018.txt");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeStudents();
    showTab('alunos');
});
