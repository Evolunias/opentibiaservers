import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-open-tibia');
}

export default function WithScreenshotsNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-open-tibia" />;
}
