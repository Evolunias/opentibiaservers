import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-server');
}

export default function WithScreenshotsEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-server" />;
}
