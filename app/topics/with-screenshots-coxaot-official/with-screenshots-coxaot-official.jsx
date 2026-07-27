import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-official');
}

export default function WithScreenshotsCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-official" />;
}
