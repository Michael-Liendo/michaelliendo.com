import Card from '../../components/Card';
import Layout from '../../components/Layout';
import SocialMedia from '../../components/SocialMedia';

export default function HireMePage() {
  return (
    <Layout title="Work with me | Michael Liendo">
      <div className="lg:flex lg:space-x-20 lg:space-y-0 space-y-5">
        <Card className="p-6">
          <h1 className="text-4xl">Work with me</h1>
          <p className="mt-6">
            If you are interested in working with me, you can contact me through
            my Twitter account or email. Just send me a direct message with a
            brief description of the project and the key details I need to know
            in order to start working on your project.
          </p>
          <div className="ml-4 mb-3 text-cyan-300 opacity-70">
            <h3 className="my-3 text-2xl">Project name</h3>
            <p>
              Hello, I want a __________ software that allows me to do
              __________. This must be customizable, configurable and
              translatable. This is a list of features that the project needs to
              have:
            </p>
            <ul className="ml-8 list-disc">
              <li>#1 feature</li>
              <li>#2 feature</li>
              <li>#3 feature</li>
              <li>#4 feature</li>
              <li>#5 feature</li>
              <li>#6 feature</li>
            </ul>
            <p>
              This should be completed by __________ date. The project is
              inspired by _________ which you can use to get references.
            </p>
          </div>
          <p>
            With all the details explained I can calculate a price estimate and
            a delivery date.
          </p>
        </Card>
        <Card className="p-6 flex flex-col justify-around items-center lg:w-2/5">
          <a
            href="mailto:contact@michaelliendo.com"
            className="text-xl select-all"
          >
            contact@michaelliendo.com
          </a>
          <SocialMedia />
        </Card>
      </div>
    </Layout>
  );
}
