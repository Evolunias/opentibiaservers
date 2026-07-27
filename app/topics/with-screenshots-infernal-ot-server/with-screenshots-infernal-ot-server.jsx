import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-infernal-ot-server');
}

export default function WithScreenshotsInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-infernal-ot-server" />;
}
