import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-guide');
}

export default function WithScreenshotsEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-guide" />;
}
