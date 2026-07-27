import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-open-tibia');
}

export default function WithScreenshotsCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-open-tibia" />;
}
