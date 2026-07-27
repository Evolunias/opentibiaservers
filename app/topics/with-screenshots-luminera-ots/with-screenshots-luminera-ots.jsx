import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-ots');
}

export default function WithScreenshotsLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-ots" />;
}
