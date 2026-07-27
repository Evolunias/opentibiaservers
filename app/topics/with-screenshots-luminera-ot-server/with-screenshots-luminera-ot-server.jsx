import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-ot-server');
}

export default function WithScreenshotsLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-ot-server" />;
}
