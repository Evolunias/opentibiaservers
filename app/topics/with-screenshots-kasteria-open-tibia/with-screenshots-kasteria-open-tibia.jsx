import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-open-tibia');
}

export default function WithScreenshotsKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-open-tibia" />;
}
