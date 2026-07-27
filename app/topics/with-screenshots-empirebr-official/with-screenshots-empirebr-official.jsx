import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-official');
}

export default function WithScreenshotsEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-official" />;
}
