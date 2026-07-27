import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-originaltibia-tibia');
}

export default function WithScreenshotsOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-originaltibia-tibia" />;
}
