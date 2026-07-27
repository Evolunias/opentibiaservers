import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-tibia');
}

export default function WithScreenshotsSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-tibia" />;
}
