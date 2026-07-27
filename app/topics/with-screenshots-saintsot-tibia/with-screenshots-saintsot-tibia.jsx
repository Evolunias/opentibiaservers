import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-tibia');
}

export default function WithScreenshotsSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-tibia" />;
}
