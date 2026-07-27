import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-ots');
}

export default function WithScreenshotsCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-ots" />;
}
