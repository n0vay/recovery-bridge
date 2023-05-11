import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PatientAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Age at admission</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>1 12–14 years </Typography>
          <Typography>2 15–17 years </Typography>
          <Typography>3 18–20 years </Typography>
          <Typography>4 21–24 years </Typography>
          <Typography>5 25–29 years </Typography>
          <Typography>6 30–34 years </Typography>
          <Typography>7 35–39 years </Typography>
          <Typography>8 40–44 years </Typography>
          <Typography>9 45–49 years </Typography>
          <Typography>10 50–54 years </Typography>
          <Typography>11 55–64 years </Typography>
          <Typography>12 64-- years </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Substance use type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>0 None </Typography>
          <Typography>1 Alcohol only </Typography>
          <Typography>2 Other drugs only</Typography>
          <Typography>3 Alcohol and other drugs</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Alcohol reported</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>0 No </Typography>
          <Typography>1 Yes </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Amphetamines reported</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>0 No </Typography>
          <Typography>1 Yes </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Criminal Justice Referral</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>1 State/federal court</Typography>
          <Typography>2 Formal adjudication process</Typography>
          <Typography>3 Probation/parole</Typography>
          <Typography>4 Other recognized legal entity</Typography>
          <Typography>5 Diversionary program</Typography>
          <Typography>6 Prison</Typography>
          <Typography>7 DUI/DWI</Typography>
          <Typography>8 Other</Typography>
          <Typography>-9 Missing/unknown/not collected/invalid</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>DSM Diagnosis</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>1 Alcohol-induced disorder 12,628 0.7%</Typography>
          <Typography>2 Substance-induced disorder</Typography>
          <Typography>3 Alcohol intoxication</Typography>
          <Typography>4 Alcohol dependence</Typography>
          <Typography>5 Opioid dependence</Typography>
          <Typography>6 Cocaine dependence</Typography>
          <Typography>7 Cannabis dependence</Typography>
          <Typography>8 Other substance dependence</Typography>
          <Typography>9 Alcohol abuse</Typography>
          <Typography>10 Cannabis abuse</Typography>
          <Typography>11 Other substance abuse</Typography>
          <Typography>12 Opioid abuse</Typography>
          <Typography>13 Cocaine abuse</Typography>
          <Typography>14 Anxiety disorders</Typography>
          <Typography>15 Depressive disorders</Typography>
          <Typography>16 Schizophrenia/other psychotic disorders</Typography>
          <Typography>17 Bipolar disorders</Typography>
          <Typography>
            18 Attention deficit/disruptive behavior disorders
          </Typography>
          <Typography>19 Other mental health condition</Typography>
          <Typography>
            -9 Missing/unknown/not collected/invalid/no or deferred diagnosis
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Employment Status at Admission</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>1 Full-time </Typography>
          <Typography>2 Part-time </Typography>
          <Typography>3 Unemployed </Typography>
          <Typography>4 Not in labor force</Typography>
          <Typography>-9 Missing/unknown/not collected/invalid</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Employment Status at Discharge</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>1 Full-time </Typography>
          <Typography>2 Part-time </Typography>
          <Typography>3 Unemployed </Typography>
          <Typography>4 Not in labor force</Typography>
          <Typography>-9 Missing/unknown/not collected/invalid</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Frequency of use at admission</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>1 No use in the past month</Typography>
          <Typography>2 Some use</Typography>
          <Typography>3 Daily use</Typography>
          <Typography>-9 Missing/unknown/not collected/invalid </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Length of stay in treatment (days)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>1 1 </Typography>
          <Typography> 2 2 </Typography>
          <Typography> 3 3 </Typography>
          <Typography> 4 4 </Typography>
          <Typography> 5 5 </Typography>
          <Typography> 6 6 </Typography>
          <Typography> 7 7 </Typography>
          <Typography> 8 8 </Typography>
          <Typography> 9 9 </Typography>
          <Typography> 10 10 </Typography>
          <Typography> 11 11 </Typography>
          <Typography> 12 12 </Typography>
          <Typography> 13 13 </Typography>
          <Typography> 14 14 </Typography>
          <Typography> 15 15 </Typography>
          <Typography> 16 16 </Typography>
          <Typography> 17 17 </Typography>
          <Typography> 18 18 </Typography>
          <Typography> 19 19 </Typography>
          <Typography> 20 20 </Typography>
          <Typography> 21 21 </Typography>
          <Typography> 22 22 </Typography>
          <Typography> 23 23 </Typography>
          <Typography> 24 24 </Typography>
          <Typography> 25 25 </Typography>
          <Typography> 26 26 </Typography>
          <Typography> 27 27 </Typography>
          <Typography> 28 28 </Typography>
          <Typography> 29 29 </Typography>
          <Typography> 30 30 </Typography>
          <Typography> 31-45 </Typography>
          <Typography> 46-60 </Typography>
          <Typography> 61-90 </Typography>
          <Typography> 91-120 </Typography>
          <Typography> 121-180 </Typography>
          <Typography> 181-365 </Typography>
          <Typography> more than 365 </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Marijuana/hashish reported</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>0 No </Typography>
          <Typography>1 Yes </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Non-rx methadone reported</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>0 No </Typography>
          <Typography>1 Yes </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>opiates/synthetics reported</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>0 No </Typography>
          <Typography>1 Yes </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Reason for Discharge</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>1 Treatment completed </Typography>
          <Typography>2 Dropped out of treatment</Typography>
          <Typography>3 Terminated by facility </Typography>
          <Typography>
            4 Transferred to another treatment program or facility
          </Typography>
          <Typography>5 Incarcerated </Typography>
          <Typography>6 Death </Typography>
          <Typography>7 Other </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Type of treatment/service</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>1 Detox, 24-hour, hospital inpatient </Typography>
          <Typography>2 Detox, 24-hour, free-standing residential </Typography>
          <Typography>3 Rehab/residential, hospital (non-detox) </Typography>
          <Typography>
            4 Rehab/residential, short term (30 days or fewer)
          </Typography>
          <Typography>
            5 Rehab/residential, long term (more than 30 days)
          </Typography>
          <Typography>6 Ambulatory, intensive outpatient </Typography>
          <Typography>7 Ambulatory, non-intensive outpatient </Typography>
          <Typography>8 Ambulatory, detoxification </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
