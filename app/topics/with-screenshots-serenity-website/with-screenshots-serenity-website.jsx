import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-website');
}

export default function WithScreenshotsSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-website" />;
}
