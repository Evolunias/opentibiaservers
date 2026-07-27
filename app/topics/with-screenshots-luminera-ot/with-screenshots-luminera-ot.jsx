import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-ot');
}

export default function WithScreenshotsLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-ot" />;
}
