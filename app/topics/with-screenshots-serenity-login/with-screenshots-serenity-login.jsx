import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-login');
}

export default function WithScreenshotsSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-login" />;
}
