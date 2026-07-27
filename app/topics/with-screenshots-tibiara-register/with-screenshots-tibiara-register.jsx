import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-register');
}

export default function WithScreenshotsTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-register" />;
}
