import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-client');
}

export default function WithScreenshotsEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-client" />;
}
