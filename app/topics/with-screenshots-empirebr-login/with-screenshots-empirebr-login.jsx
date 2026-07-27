import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-login');
}

export default function WithScreenshotsEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-login" />;
}
