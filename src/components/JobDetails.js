import ReactMarkdown from "react-markdown";

function JobDetails({ theme }) {
  return (
    <>
      <div className="container">
        <div className="job-details">
          <div className={`company-info bg-${theme}`}>
            <div className="logo-container"></div>
            <div className="name-link">
              <div>
                <h3>Company Name</h3>
                <p>company url</p>
              </div>
              <a href="example.com" className="btn-link btn-washed">
                Company Site
              </a>
            </div>
          </div>
          <div className={`job bg-${theme}`}>
            <div className="job-summary">
              <div>
                <div className="time-type-container text-gray mb-md">
                  <p>1w ago</p>
                  <span className="dot-divider"></span>
                  <p>Part Time</p>
                </div>
                <h2>Senior Software Engineer</h2>
                <p className="text-violet">location</p>
              </div>
              <a href="#" className="btn btn-violet btn-link">
                Apply now
              </a>
            </div>
            <div className="job-description">
              <ReactMarkdown children={description} />
            </div>
          </div>
          <div className="how-to-apply">
            <h3>How to Apply</h3>
          </div>
        </div>
      </div>
      <footer className={`footer bg-${theme}`}>
        <div className="container">
          <div className="name-link">
            <div>
              <h3>Company Name</h3>
              <p>company url</p>
            </div>
            <a href="example.com" className="btn btn-link btn-violet">
              Company Site
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

const description =
  "DISH is a Fortune 250 company with more than $14 billion in annual revenue that continues to redefine the communications industry. Our legacy is innovation and a willingness to challenge the status quo, including reinventing ourselves. We disrupted the pay-TV industry in the mid-90s with the launch of the DISH satellite TV service, taking on some of the largest U.S. corporations in the process, and grew to be the fourth-largest pay-TV provider. We are doing it again with the first live, internet-delivered TV service – Sling TV – that bucks traditional pay-TV norms and gives consumers a truly new way to access and watch television.\r\n \r\n\r\nNow we have our sights set on upending the wireless industry and unseating the entrenched incumbent carriers.\r\n \r\n\r\nWe are driven by curiosity, pride, adventure, and a desire to win – it’s in our DNA. We’re looking for people with boundless energy, intelligence, and an overwhelming need to achieve to join our team as we embark on the next chapter of our story.\r\n \r\n\r\nOpportunity is here. We are DISH. #LI-HT1\r\n\r\nThe DISH Retail Wireless organization is looking for a Business Analyst to perform configuration and support of complex wireless product offerings in an enterprise level product catalog. You must have the ability to work in a fast paced and evolving environment where initial requirements are vague and evolving.  The ability to quickly learn the Hansen Sigma Catalog product, interpret requirements, and deliver complex configurations will be critical.\r\nPrimary responsibilities fall into the following categories:\r\nCreate complex, multi-tier product, service, and resource entities following best practices and adhering to standards identified by TMForum and DISH\r\nProduce and present design documents and standards for catalog configuration including but not limited to, look and feel within the catalog and configuration standards\r\nWork closely with the Product Team to implement new products & processes and changes to existing products and processes\r\nWorks closely with the product owner to determine if incoming requests are configuration or development work\r\nProvide end-user support, and participate in the development and implementation of future enhancements and/or projects. Including training and mentoring\r\nAnalyze, test, and document modeling integration within the catalog\r\nDebug data configuration issues\r\n#LI-RM1\r\n\r\nA successful Business Analyst will have the following:\r\n\r\nExcellent analytical and problem-solving skills\r\nExperience in Product and Service catalog configuration or similar\r\nStrong interpersonal and communication skills\r\n5+ years experience\r\n \r\n\r\nPreferred Qualifications:\r\n\r\nWorking knowledge of protocols such as JSON/XML/XSLT/REST\r\nCompensation: $55,800.00/Yr. - $76,900.00/Yr.\r\n \r\n\r\nFrom versatile health perks to new career opportunities, check out our benefits on our careers website.\r\n\r\n\r\nEmployment is contingent on successful completion of a pre-employment criminal background check, which may include a drug test.    \r\n\r\nDISH endeavors to make http://careers.dish.com accessible to any and all users. If you would like to contact us regarding the accessibility of our website or need assistance completing the application process, please contact accessibility@dish.com. This contact information is for accommodation requests only; you may not use this contact information to inquire about the status of applications.\r\n\r\nWe pride ourselves on developing and promoting talent as an Equal Employment Opportunity Employer - Veteran/Disability. All qualified applicants will receive consideration for employment without regard to race, national origin, gender, age, religion, disability, veteran status, or any other category protected by law. We are a true merit-based organization and work hard so there are no artificial barriers to one's potential success. DISH is committed to a workforce where everyone's opportunities are limitless.\r\n\r\nConsistent with this commitment, DISH will endeavor to provide reasonable accommodation to otherwise qualified job applicants and employees with known physical or mental disabilities, unless doing so poses an undue hardship on the Company, poses a direct threat of substantial harm to the employee or others, or is otherwise not required by law.";

export default JobDetails;
