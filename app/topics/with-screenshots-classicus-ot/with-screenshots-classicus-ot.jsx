import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-ot');
}

export default function WithScreenshotsClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-ot" />;
}
