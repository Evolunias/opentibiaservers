import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-originaltibia-open-tibia');
}

export default function WithScreenshotsOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-originaltibia-open-tibia" />;
}
