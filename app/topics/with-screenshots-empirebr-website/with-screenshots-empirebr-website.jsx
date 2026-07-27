import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-website');
}

export default function WithScreenshotsEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-website" />;
}
