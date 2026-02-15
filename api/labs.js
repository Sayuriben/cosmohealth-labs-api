export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const labs = [
    {
      patientId: "P001",
      culture: "E. coli",
      cultureResult: "Resistant to cephalosporins, sensitive to carbapenems",
      crpValue: 45,
      crpTrend: "Falling",
      wccValue: 8.2,
      wccTrend: "Stable",
      severity: "high"
    },
    {
      patientId: "P002",
      culture: "Klebsiella pneumoniae",
      cultureResult: "Sensitive to narrow-spectrum agents",
      crpValue: 32,
      crpTrend: "Falling",
      wccValue: 6.5,
      wccTrend: "Falling",
      severity: "medium"
    },
    {
      patientId: "P003",
      culture: "Staphylococcus aureus",
      cultureResult: "MSSA, sensitive to beta-lactams",
      crpValue: 28,
      crpTrend: "Stable",
      wccValue: 7.1,
      wccTrend: "Stable",
      severity: "high"
    }
  ];

  const path = req.url || '/';
  
  if (path === '/' || path === '/api/labs') {
    return res.status(200).json(labs);
  }

  const patientId = path.split('/').pop();
  const lab = labs.find(l => l.patientId === patientId);
  
  if (lab) {
    return res.status(200).json(lab);
  }
  
  return res.status(404).json({ error: 'Not found' });
}
