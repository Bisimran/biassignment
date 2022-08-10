import React from "react";
import "./Built.css";

function Built() {
  return (
    <>
      <div className="built-container">
        <h1 className="built-heading">We Are Built To Support</h1>
        <div class="built_support">
          <div class="built_feature">
            <img src="https://binaryinformatics.co/assets/support-1.png" alt="" class="support_img" />
            <h2 class="annotation_heading">Image Annotation Platform Owners</h2>
            <div>
              <p class="annotation_subheading">Secure : Confidentiality, Info Security Compliances</p>
              <p class="annotation_subheading">24/7 Support&nbsp;</p>
              <p class="annotation_subheading">Enterprise -grade SLAs&nbsp;</p>
              <p class="annotation_subheading">Adaptability: To your in-house annotation tools &amp; proprietary platform&nbsp;</p>
              <p class="annotation_subheading">Flexibility: Custom Reporting&nbsp;</p>
            </div>
          </div>

          <div class="built_feature ai_feature">
            <img src="https://binaryinformatics.co/assets/support-2.png" alt="" class="support_img" />
            <h2 class="annotation_heading">AI Product Startups/AI Services Companies/SMEs/Fortune Companies</h2>
            <div>
              <p class="annotation_subheading">Secure : Confidentiality, Info Security Compliances</p>
              <p class="annotation_subheading">24/7 Support&nbsp;</p>
              <p class="annotation_subheading">Enterprise -grade SLAs&nbsp;</p>
              <p class="annotation_subheading">Powerful Annotation Platform</p>
              <p class="annotation_subheading">Proprietary Annotation Platform&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Built;
