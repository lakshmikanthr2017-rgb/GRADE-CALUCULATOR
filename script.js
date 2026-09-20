/**
 * Smart Grade & Weightage Calculator Script
 * Formula based on GRADECALUCULATOR.xlsx
 * Designed by: LAKSHMIKANTH R (Mob: 9844444871)
 */

document.addEventListener("DOMContentLoaded", () => {
    calculatePrimaryFA();
    calculatePrimarySA();
    calculateMiddleFA();
    calculateMiddleSA();
});

// Tab Switch Function
function switchTab(tabId, btnElement) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    btnElement.classList.add('active');
}

// Formula to determine grade based on percentage (Exact Excel Formula implementation)
function calculateGrade(pct) {
    if (pct >= 90) return { label: "A+", class: "grade-ap" };
    if (pct >= 70) return { label: "A", class: "grade-a" };
    if (pct >= 50) return { label: "B+", class: "grade-bp" };
    if (pct >= 30) return { label: "B", class: "grade-b" };
    return { label: "C", class: "grade-c" };
}

// 1 TO 5TH CALCULATOR LOGIC
function calculatePrimaryFA() {
    const max = parseFloat(document.getElementById("p_fa_max").value) || 0;
    const obt = parseFloat(document.getElementById("p_fa_obt").value) || 0;

    if (max <= 0) return;

    // Weightage = (Obtained / Max) * 15
    const weightage = (obt / max) * 15;
    const percentage = (obt / max) * 100;
    const gradeObj = calculateGrade(percentage);

    document.getElementById("p_fa_weight").innerText = `${weightage.toFixed(2)} / 15`;
    document.getElementById("p_fa_pct").innerText = `${percentage.toFixed(1)}%`;
    
    const gBadge = document.getElementById("p_fa_grade");
    gBadge.innerText = gradeObj.label;
    gBadge.className = `grade-badge ${gradeObj.class}`;
}

function calculatePrimarySA() {
    const max = parseFloat(document.getElementById("p_sa_max").value) || 0;
    const obt = parseFloat(document.getElementById("p_sa_obt").value) || 0;

    if (max <= 0) return;

    // Weightage = (Obtained / Max) * 20
    const weightage = (obt / max) * 20;
    const percentage = (obt / max) * 100;
    const gradeObj = calculateGrade(percentage);

    document.getElementById("p_sa_weight").innerText = `${weightage.toFixed(2)} / 20`;
    document.getElementById("p_sa_pct").innerText = `${percentage.toFixed(1)}%`;

    const gBadge = document.getElementById("p_sa_grade");
    gBadge.innerText = gradeObj.label;
    gBadge.className = `grade-badge ${gradeObj.class}`;
}

// 6 TO 8TH CALCULATOR LOGIC
function calculateMiddleFA() {
    const max = parseFloat(document.getElementById("m_fa_max").value) || 0;
    const obt = parseFloat(document.getElementById("m_fa_obt").value) || 0;

    if (max <= 0) return;

    // Weightage = (Obtained / Max) * 10
    const weightage = (obt / max) * 10;
    const percentage = (obt / max) * 100;
    const gradeObj = calculateGrade(percentage);

    document.getElementById("m_fa_weight").innerText = `${weightage.toFixed(2)} / 10`;
    document.getElementById("m_fa_pct").innerText = `${percentage.toFixed(1)}%`;

    const gBadge = document.getElementById("m_fa_grade");
    gBadge.innerText = gradeObj.label;
    gBadge.className = `grade-badge ${gradeObj.class}`;
}

function calculateMiddleSA() {
    const max = parseFloat(document.getElementById("m_sa_max").value) || 0;
    const obt = parseFloat(document.getElementById("m_sa_obt").value) || 0;

    if (max <= 0) return;

    // Weightage = (Obtained / Max) * 30
    const weightage = (obt / max) * 30;
    const percentage = (obt / max) * 100;
    const gradeObj = calculateGrade(percentage);

    document.getElementById("m_sa_weight").innerText = `${weightage.toFixed(2)} / 30`;
    document.getElementById("m_sa_pct").innerText = `${percentage.toFixed(1)}%`;

    const gBadge = document.getElementById("m_sa_grade");
    gBadge.innerText = gradeObj.label;
    gBadge.className = `grade-badge ${gradeObj.class}`;
}
