import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-tibia');
}

export default function WithScreenshotsCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-tibia" />;
}
