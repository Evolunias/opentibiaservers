import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr');
}

export default function WithScreenshotsEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr" />;
}
