// In script.js
async function submitLoanApplication(data) {
  const response = await fetch('http://your-backend-url/api/apply-loan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}

// Example: Loan calculator for members
document.addEventListener('DOMContentLoaded', () => {
  const loanForm = document.getElementById('loan-form');
  if (loanForm) {
    loanForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const amount = document.getElementById('amount').value;
      const term = document.getElementById('term').value;
      alert(`Loan request: $${amount} for ${term} months submitted!`);
    });
  }
});