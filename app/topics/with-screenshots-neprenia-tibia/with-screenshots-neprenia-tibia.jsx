import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-tibia');
}

export default function WithScreenshotsNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-tibia" />;
}
