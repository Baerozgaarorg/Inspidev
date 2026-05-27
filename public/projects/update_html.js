const fs = require('fs');

try {
    let html = fs.readFileSync('index.html', 'utf8');

    // 1. Extract timeline-items
    const timelineMatch = html.match(/<div class="timeline-items">([\s\S]*?)<\/div>\s*<\/section>/);
    if (!timelineMatch) {
        console.error("Could not find timeline-items");
        process.exit(1);
    }
    const timelineContent = timelineMatch[1];

    // 2. Remove old video-portfolio section
    // Starts with: <section class="portfolio video-portfolio"
    // Ends with: </section> where timeline items was
    html = html.replace(/\s*<section class=\"portfolio video-portfolio\" id=\"video-portfolio\" style=\"display: none;\">[\s\S]*?<\/div>\s*<\/section>/, '');

    // 3. Replace the service box
    const oldBoxRegex = /<div class="service-box" onclick="showVideoPortfolio\(\)">\s*<div class="service-info">\s*<h4>Video Editing<\/h4>\s*<p>Turn raw footage into compelling stories with professional editing that\s*enhances every frame\.\s*<\/p>\s*<\/div>\s*<\/div>/;

    const newBox = `<div class="service-box video-editing-box" onclick="toggleAccordion(this, event)">
                    <div class="service-info">
                        <h4>Video Editing</h4>
                        <p>Turn raw footage into compelling stories with professional editing that
                            enhances every frame.
                        </p>
                        <span class="expand-icon"><i class='bx bx-chevron-down'></i></span>
                    </div>
                    <div class="accordion-content-wrapper">
                        <div class="accordion-content">
                            <div class="scroll-timeline-container">
                                <div class="scroll-dot"></div>
                                <div class="scroll-line-bg"></div>
                                <div class="scroll-line-fill" id="scroll-line-fill"></div>
                            </div>
                            <div class="timeline-items">
${timelineContent}
                            </div>
                        </div>
                    </div>
                </div>`;

    if (oldBoxRegex.test(html)) {
        html = html.replace(oldBoxRegex, newBox);
        fs.writeFileSync('index.html', html, 'utf8');
        console.log('Successfully updated index.html');
    } else {
        console.error('Could not find exact oldBox string to replace');
    }

} catch (err) {
    console.error(err);
}
