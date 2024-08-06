import { Flex } from "@mantine/core";

interface ManagementBackgroundItem {
  name: string;
  title: string;
  background: string;
}

interface ManagementBackgroundData {
  bobSmith: ManagementBackgroundItem[];
  johnSmith: ManagementBackgroundItem[];
  johnDoe: ManagementBackgroundItem[];
  aliceTest: ManagementBackgroundItem[];
}

const mockManagementBackgroundData: ManagementBackgroundData = {
  bobSmith: [
    {
      name: "Bob Smith",
      title: "Chief Executive Officer (CEO)",
      background:
        "Bob Smith brings over 20 years of leadership experience in the technology sector. As CEO, Bob has successfully led the company through multiple growth phases, focusing on innovation, customer satisfaction, and strategic partnerships. With a background in engineering and a keen eye for market trends, Bob is committed to driving the company towards long-term success and sustainable growth.",
    },
  ],
  johnSmith: [
    {
      name: "John Smith",
      title: "Chief Financial Officer (CFO)",
      background:
        "John Smith is a seasoned financial expert with a proven track record in managing large-scale budgets and optimizing financial performance. With over 15 years of experience in corporate finance and strategic planning, John oversees all financial operations, ensuring the company’s fiscal health and compliance. His strategic insight and data-driven approach have been instrumental in achieving financial stability and growth.",
    },
  ],
  johnDoe: [
    {
      name: "John Doe",
      title: "Chief Technology Officer (CTO)",
      background:
        "John Doe is a visionary technologist with a deep understanding of software development, cloud computing, and data security. With a career spanning over 18 years, John has led numerous successful technology transformations and product launches. As CTO, he is responsible for driving the company's technology strategy, ensuring the infrastructure supports future innovations and meets the highest standards of security and performance.",
    },
  ],
  aliceTest: [
    {
      name: "Alice Test",
      title: "Chief Marketing Officer (CMO)",
      background:
        "Alice Test is a dynamic marketing leader with over 12 years of experience in brand management, digital marketing, and customer engagement. She has a strong background in creating impactful marketing campaigns that resonate with diverse audiences. As CMO, Alice leads the marketing team in building the brand's presence, enhancing customer experience, and driving revenue growth through innovative marketing strategies.",
    },
  ],
};

const renderBio = (item: ManagementBackgroundItem) => {
  return (
    <div
      key={item.name}
      style={{
        border: "1px solid #bfbfbf",
        padding: "10px",
        marginBottom: "2.5em",
        marginLeft: "2.5em",
        marginRight: "2.5em",
        borderRadius: "10px",
      }}
    >
      <h3 style={{ fontWeight: "bold" }}>
        {item.name} - {item.title}
      </h3>
      <p>{item.background}</p>
    </div>
  );
};

export default function ManagementBackground() {
  return (
    <Flex direction="column" gap="md" style={{
        width: "80%",
        textAlign: "left",
    }}>
      {mockManagementBackgroundData.bobSmith.map((item) => renderBio(item))}
      {mockManagementBackgroundData.johnSmith.map((item) => renderBio(item))}
      {mockManagementBackgroundData.johnDoe.map((item) => renderBio(item))}
      {mockManagementBackgroundData.aliceTest.map((item) => renderBio(item))}
    </Flex>
  );
}
