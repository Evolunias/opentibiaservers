import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-ots');
}

export default function WithScreenshotsEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-ots" />;
}
